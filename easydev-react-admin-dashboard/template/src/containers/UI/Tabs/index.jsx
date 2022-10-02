import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import DefaultTabs from './components/DefaultTabs';
import DefaultTabsBorderedTop from './components/DefaultTabsBorderedTop';
import JustifyTabs from './components/JustifyTabs';
import JustifyTabsBorderedTop from './components/JustifyTabsBorderedTop';
import JustifyTabsBorderedBottom from './components/JustifyTabsBorderedBottom';
import DefaultTabsBorderedBottom from './components/DefaultTabsBorderedBottom';
import VerticalTabs from './components/VerticalTabs';
import VerticalTabsColored from './components/VerticalTabsColored';

const Tabs = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.tabs.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <DefaultTabs />
        <DefaultTabsBorderedTop />
        <JustifyTabs />
        <JustifyTabsBorderedTop />
        <JustifyTabsBorderedBottom />
        <DefaultTabsBorderedBottom />
        <VerticalTabs />
        <VerticalTabsColored />
      </Row>
    </Container>
  );
};

export default Tabs;
