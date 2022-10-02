import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import DefaultButtons from './components/DefaultButtons';
import SquareButtons from './components/SquareButtons';
import RoundedButtons from './components/RoundedButtons';
import StatusButtons from './components/StatusButtons';
import ButtonGroups from './components/ButtonGroups';
import ButtonIcons from './components/ButtonIcons';
import ButtonDropdown from './components/ButtonDropdown';

const Buttons = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.buttons.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <DefaultButtons />
        <ButtonIcons />
        <SquareButtons />
        <RoundedButtons />
        <StatusButtons />
        <ButtonGroups />
        <ButtonDropdown />
      </Row>
    </Container>
  );
};

export default Buttons;
