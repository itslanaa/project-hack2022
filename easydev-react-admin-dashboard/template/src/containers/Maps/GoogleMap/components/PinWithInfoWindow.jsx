import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col } from 'reactstrap';
import {
  GoogleMap, useJsApiLoader, Marker, InfoWindow,
} from '@react-google-maps/api';

const containerStyle = {
  height: '360px',
};

const center = {
  lat: 56.009483,
  lng: 92.8121694,
};

const PinWithInfoWindow = () => {
  const { t } = useTranslation('common');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
  });

  const [isOpened, setIsOpened] = useState(true);

  const onToggleIsOpen = () => {
    setIsOpened(!isOpened);
  };

  const onLoad = (infoWindow) => {
    console.log('infoWindow: ', infoWindow);
  };

  return (
    <Col xs={12} md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('maps.google_map.pin_with_info_window')}</h5>
          </div>
          {isLoaded ? (
            <GoogleMap
              id="infoWindowMap"
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            >
              <Marker position={center} onClick={onToggleIsOpen}>
                {!isOpened && (
                  <InfoWindow
                    onLoad={onLoad}
                    options={{ closeBoxURL: '', enableEventPropagation: true }}
                  >
                    <div className="map__marker-label-content">
                      DRAKARYS!!!
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            </GoogleMap>
          ) : <Fragment />}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PinWithInfoWindow;
