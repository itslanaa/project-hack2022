import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import Register from '../Register/index';
import ResetPassword from '../ResetPassword/index';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const mapStateToPropsRoute = state => ({
  loggedIn: state.auth.loggedIn,
});

const AuthRoute = connect(mapStateToPropsRoute)(({ loggedIn, ...restOfProps }) => (
  loggedIn ? <Redirect to="/pages/one" /> : <Route {...restOfProps} />
));

const ProtectedRoute = connect(mapStateToPropsRoute)(({
  loggedIn,
  component: Component,
  ...restOfProps
}) => (
  <Route
    {...restOfProps}
    render={props => (loggedIn ? <Component {...props} /> : <Redirect to="/" />)}
  />
));

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <AuthRoute exact path="/" component={LogIn} />
        <AuthRoute path="/register" component={Register} />
        <AuthRoute path="/reset_password" component={ResetPassword} />
        <ProtectedRoute path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
