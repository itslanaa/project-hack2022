import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import Panel from '@/shared/components/Panel';

const TabsPanelDivider = () => {
  const { t } = useTranslation('common');
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Panel xs={12} md={12} lg={6} divider title={t('ui_elements.panels.tabs_panel_divider')}>
      <div className="tabs--bordered-bottom">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => toggle('1')}
            >
              Sales
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => toggle('2')}
            >
              Statistic
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => toggle('3')}
            >
              Offers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '4' })}
              onClick={() => toggle('4')}
            >
              Refounds
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <p className="typography-message">
              Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men.
            </p>
          </TabPane>
          <TabPane tabId="2">
            <p className="typography-message">
              Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
            </p>
          </TabPane>
          <TabPane tabId="3">
            <p className="typography-message">
              Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
            </p>
          </TabPane>
          <TabPane tabId="4">
            <p className="typography-message">
              Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
              Article concern joy anxious did picture sir her.
            </p>
          </TabPane>
        </TabContent>
      </div>
    </Panel>
  );
};

export default TabsPanelDivider;
