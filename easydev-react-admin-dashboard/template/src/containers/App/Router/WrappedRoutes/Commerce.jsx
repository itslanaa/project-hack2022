import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ECommerceDashboard from '../../../Dashboards/ECommerce/index';
import ECommerceDashboardEdit from '../../../Dashboards/ECommerceTableEdit/index';

export default () => (
  <Switch>
    <Route exact path="/e_commerce_dashboard" component={ECommerceDashboard} />
    <Route path="/e_commerce_dashboard/edit/:index" component={ECommerceDashboardEdit} />
  </Switch>
);
