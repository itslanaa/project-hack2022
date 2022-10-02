import { createAction } from 'redux-actions';
import api from '../../utils/apiClient';

export const fetchAppConfigRequest = createAction('FETCH_APP_CONFIG_REQUEST');
export const fetchAppConfigSuccess = createAction('FETCH_APP_CONFIG_SUCCESS');
export const fetchAppConfigFailure = createAction('FETCH_APP_CONFIG_FAILURE');

export const fetchAppConfig = () => async (dispatch) => {
  try {
    dispatch(fetchAppConfigRequest());
    const response = await api.appConfig.getAppConfigData(); // Fake request example
    const configAppData = response.data;
    dispatch(fetchAppConfigSuccess(configAppData));
  } catch (error) {
    dispatch(fetchAppConfigFailure({ error }));
    throw error;
  }
};
