import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  GoogleMap, MarkerClusterer, Marker,
} from '@react-google-maps/api';
import Panel from '@/shared/components/Panel';
import data from './data.json';

const containerStyle = {
  height: '360px',
};

const center = {
  lat: 25.0391667,
  lng: 121.525,
};

const locations = data.photos.map(marker => ({
  lat: marker.latitude,
  lng: marker.longitude,
}));

const createKey = (location, index) => location.lat + location.lng + index;

const BestSellingRegions = () => {
  const { t } = useTranslation('common');

  return (
    <Panel xs={12} md={12} lg={12} xl={8} title={t('online_marketing_dashboard.best_selling')}>
      <div dir="ltr">
        <GoogleMap
          id="bestSellingRegionsMap"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={3}
        >
          <MarkerClusterer
            options={data.photos}
          >
            {cluster => locations.map((location, index) => (
              <Marker key={createKey(location, index)} position={location} clusterer={cluster} />
            ))}
          </MarkerClusterer>
        </GoogleMap>
      </div>
    </Panel>
  );
};

export default BestSellingRegions;
