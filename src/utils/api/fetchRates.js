import axios from 'axios';
import { API_URL } from '../constants/apiConstants';

export default () => axios.get(API_URL);