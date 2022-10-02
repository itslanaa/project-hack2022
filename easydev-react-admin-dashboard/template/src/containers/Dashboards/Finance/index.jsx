import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { deleteCryptoTableData } from '@/redux/actions/cryptoTableActions';
import { CryptoTableProps } from '@/shared/prop-types/TablesProps';
import { ThemeProps, RTLProps } from '@/shared/prop-types/ReducerProps';
import BTC from './components/BTC';
import ETH from './components/ETH';
import BCH from './components/BCH';
import XRP from './components/XRP';
import TradeHistory from './components/TradeHistory';
import BtcEth from './components/BtcEth';
import CryptotrendsToday from './components/CryptotrendsToday';
import TopTen from './components/TopTen';
import PlaceOrder from './components/PlaceOrder';

const onDeleteCryptoTableData = (dispatch, cryptoTable) => (index) => {
  const arrayCopy = [...cryptoTable];
  arrayCopy.splice(index, 1);
  dispatch(deleteCryptoTableData(arrayCopy));
};

const FinanceDashboard = ({
  dispatch, cryptoTable, rtl, theme,
}) => {
  const { t } = useTranslation('common');

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('finance_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <BTC dir={rtl.direction} />
        <ETH dir={rtl.direction} />
        <BCH dir={rtl.direction} />
        <XRP dir={rtl.direction} />
      </Row>
      <Row>
        <TradeHistory />
        <BtcEth
          dir={rtl.direction}
          theme={theme.className}
        />
        <CryptotrendsToday dir={rtl.direction} />
        <PlaceOrder />
        <TopTen cryptoTable={cryptoTable} onDeleteCryptoTableData={onDeleteCryptoTableData(dispatch, cryptoTable)} />
      </Row>
    </Container>
  );
};

FinanceDashboard.propTypes = {
  cryptoTable: CryptoTableProps.isRequired,
  dispatch: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,
  theme: ThemeProps.isRequired,
};

export default connect(state => ({
  cryptoTable: state.cryptoTable.items,
  rtl: state.rtl,
  theme: state.theme,
}))(FinanceDashboard);
