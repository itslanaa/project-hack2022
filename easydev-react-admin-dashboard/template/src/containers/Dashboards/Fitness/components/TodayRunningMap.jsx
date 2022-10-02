import React from 'react';
import { useTranslation } from 'react-i18next';
import { GoogleMap, KmlLayer } from '@react-google-maps/api';
import Panel from '@/shared/components/Panel';

const mapContainerStyle = {
  height: '360px',
};

const center = {
  lat: 41.876,
  lng: -87.624,
};

const TodayRunningMap = () => {
  const { t } = useTranslation('common');

  return (
    <Panel xs={12} lg={12} xl={9} md={12} title={t('fitness_dashboard.today_running_map')}>
      <GoogleMap
        id="todayRunningMap"
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
      >
        <KmlLayer url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml" />
      </GoogleMap>
    </Panel>
  );
};

export default TodayRunningMap;
