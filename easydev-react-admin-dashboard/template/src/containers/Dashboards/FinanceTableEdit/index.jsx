import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { changeCryptoTableData, loadCryptoTableData } from '@/redux/actions/cryptoTableActions';
import TopTenEditForm from './components/TopTenEditForm';

const FinanceDashboardEdit = ({ dispatch, match }) => {
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    dispatch(loadCryptoTableData(match.params.index));
  }, [dispatch, match.params.index]);

  const handleSubmit = (formValues) => {
    dispatch(changeCryptoTableData(formValues, match.params.index));
    setIsRedirect(true);
  };

  if (isRedirect) {
    return <Redirect to="/finance_dashboard" />;
  }

  return (
    <Container className="dashboard">
      <Row>
        <TopTenEditForm onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

FinanceDashboardEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  cryptoTable: state.cryptoTable,
});

export default connect(mapStateToProps)(FinanceDashboardEdit);
