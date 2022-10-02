import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import silverMapStyle from './silverMapStyle.json';

const containerStyle = {
  height: '360px',
};

const center = {
  lat: 56.009483,
  lng: 92.8121694,
};

// Reference for options:
// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

// Make your own map styles
// https://mapstyle.withgoogle.com/

// Styles in options will work only if you will add your googleMapsApiKey to template/src/containers/App/App.jsx
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: silverMapStyle,
};

const MonochromeMap = () => {
  const { t } = useTranslation('common');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
  });

  return (
    <Col xs={12} md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('maps.google_map.monochrome_map')}</h5>
          </div>
          {isLoaded ? (
            <GoogleMap
              id="monochromeMap"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
              options={options}
              // optional
              onLoad={(map) => {
                console.log('DirectionsRenderer onLoad map: ', map);
              }}
              // optional
            />
          ) : <Fragment />}
        </CardBody>
      </Card>
    </Col>
  );
};

export default MonochromeMap;
