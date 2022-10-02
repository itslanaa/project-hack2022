import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '@/shared/components/CodeHighlither';

const Auth0 = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Auth0</h5>
      </div>
      <p>For authorization using auth0 you need:</p>
      <ol>
        <li>
          Register the application
          <a href="https://auth0.com/"> Auth0</a>
        </li>
        <li>
          You should copy domain and clientId from the settings of the created application.
          Paste in file <b>template/src/config/auth0.js</b>.
          Edit redirectUri and returnTo values.
          <CodeHighlither>
            {`export default {
  domain: 'DOMAIN',
  clientId: 'CLIENT_ID',
  redirectUri: 'REDIRECT_URI_ON_LOGIN',
  returnTo: 'REDIRECT_URI_ON_LOGOUT',
};
`}
          </CodeHighlither>
        </li>
        <li>
          To enable auth0 authorization, you should initialize Auth0 in the App.jsx component
          <CodeHighlither>
            {`import React, { useEffect } from 'react';
import initAuth0 from '../../shared/components/auth/withAuth0';

const App = () => {
  useEffect(() => {
    window.addEventListener('load', initAuth0);
  }, []);
  return (
    <div>
      ...
    </div>
  );
};

`}
          </CodeHighlither>
        </li>
        <li>
          Import login/logout functions to components.
          <CodeHighlither>
            {`import { login, logout } from '../../../shared/components/auth/withAuth0';

<Button className="account__social-btn account__social-btn--auth0" onClick={login}>
    <img className="customizer__btn-icon" src={auth0Icon} alt="icon" />
</Button>

<Button onClick={logout}>Logout</Button>
`}
          </CodeHighlither>
        </li>
      </ol>
    </CardBody>
  </Card>
);

export default Auth0;
