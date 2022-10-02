import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { changeNewOrderTableData, loadNewOrderTableData } from '@/redux/actions/newOrderTableActions';
import NewOrderEditForm from './components/NewOrderEditForm';

const ECommerceDashboardEdit = ({ dispatch, match }) => {
  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    dispatch(loadNewOrderTableData(match.params.index));
  }, [dispatch, match.params.index]);

  const handleSubmit = (formValues) => {
    dispatch(changeNewOrderTableData(formValues, match.params.index));
    setIsRedirect(true);
  };

  if (isRedirect) {
    return <Redirect to="/e_commerce_dashboard" />;
  }

  return (
    <Container className="dashboard">
      <Row>
        <NewOrderEditForm onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

ECommerceDashboardEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  newOrder: state.newOrder,
});

export default connect(mapStateToProps)(ECommerceDashboardEdit);
