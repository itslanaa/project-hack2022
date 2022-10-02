import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import TooltipTop from './components/TooltipTop';
import TooltipBottom from './components/TooltipBottom';
import TooltipRight from './components/TooltipRight';
import TooltipLeft from './components/TooltipLeft';
import PopoverTop from './components/PopoverTop';
import PopoverBottom from './components/PopoverBottom';
import PopoverRight from './components/PopoverRight';
import PopoverLeft from './components/PopoverLeft';

const TooltipsPopovers = ({ rtl }) => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.tooltips_popovers.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <TooltipTop dir={rtl.direction} />
        <TooltipRight dir={rtl.direction} />
        <TooltipLeft dir={rtl.direction} />
        <TooltipBottom dir={rtl.direction} />
        <PopoverTop dir={rtl.direction} />
        <PopoverRight dir={rtl.direction} />
        <PopoverLeft dir={rtl.direction} />
        <PopoverBottom dir={rtl.direction} />
      </Row>
    </Container>
  );
};

TooltipsPopovers.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(TooltipsPopovers);
