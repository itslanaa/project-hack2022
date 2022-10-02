import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FinanceDashboard from '../../../Dashboards/Finance/index';
import FinanceDashboardEdit from '../../../Dashboards/FinanceTableEdit/index';

export default () => (
  <Switch>
    <Route exact path="/finance_dashboard" component={FinanceDashboard} />
    <Route path="/finance_dashboard/edit/:index" component={FinanceDashboardEdit} />
  </Switch>
);
