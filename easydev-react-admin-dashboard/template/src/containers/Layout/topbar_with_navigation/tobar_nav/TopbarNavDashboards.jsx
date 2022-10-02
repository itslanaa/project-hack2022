import React from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {
  DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown,
} from 'reactstrap';
import TopbarNavLink from './TopbarNavLink';

const TopbarNavDashboards = () => (
  <UncontrolledDropdown className="topbar__nav-dropdown">
    <DropdownToggle className="topbar__nav-dropdown-toggle">
      Dashboards <DownIcon />
    </DropdownToggle>
    <DropdownMenu className="topbar__nav-dropdown-menu dropdown__menu">
      <DropdownItem>
        <TopbarNavLink title="Online Marketing Dashboard" icon="home" route="/online_marketing_dashboard" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="E-commerce Dashboard" icon="store" route="/e_commerce_dashboard" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="App Dashboard" icon="smartphone" route="/app_dashboard" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Booking Dashboard" icon="apartment" route="/booking_dashboard" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Finance Dashboard" icon="rocket" route="/finance_dashboard" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Fitness Dashboard" icon="heart-pulse" route="/fitness_dashboard" />
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default TopbarNavDashboards;
