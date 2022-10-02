import axios from 'axios';
import { getToken } from '../../helpers';

export const defaultParams = () => ({
  headers: { Authorization: `Bearer ${getToken()}` },
});

export default axios;
