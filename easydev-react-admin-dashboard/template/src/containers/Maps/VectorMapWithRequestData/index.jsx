import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import Map from './components/Map';
import { fetchCovidData } from './redux/actions';

const VectorMapWithRequestData = ({ fetchCovidDataAction, covidData }) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    fetchCovidDataAction();
  }, [fetchCovidDataAction]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('maps.vector_map.with_api_request')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <Map
          mapData={covidData && covidData.mapData}
        />
      </Row>
    </Container>
  );
};

VectorMapWithRequestData.propTypes = {
  fetchCovidDataAction: PropTypes.func.isRequired,
  covidData: PropTypes.shape(),
};

VectorMapWithRequestData.defaultProps = {
  covidData: null,
};

const mapStateToProps = state => ({
  covidData: state.covid.data,
});

const mapDispatchToProps = {
  fetchCovidDataAction: fetchCovidData,
};

export default connect(mapStateToProps, mapDispatchToProps)(VectorMapWithRequestData);
