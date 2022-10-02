import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import Collapse from '@/shared/components/Collapse';
import data from './data';

const BoxedCollapse = () => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('ui_elements.collapse.boxed_collapse')}</h5>
            <h5 className="subhead">Use default collapse with class <span className="red-text">boxed</span></h5>
          </div>
          {data.map(({ id, title, text }) => (
            <Collapse key={id} title={title} className="boxed">
              <p>{text}</p>
            </Collapse>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BoxedCollapse;
