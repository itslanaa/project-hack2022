import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  height: '360px',
};

const center = {
  lat: 56.009483,
  lng: 92.8121694,
};

const BasicMap = () => {
  const { t } = useTranslation('common');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
  });

  return (
    <Col xs={12} md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('maps.google_map.basic_map')}</h5>
          </div>
          {isLoaded ? (
            <GoogleMap
              id="basicMap"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            />
          ) : <Fragment />}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicMap;
