import axios from 'axios';
import {baseUrl} from './Config/api'

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
  });


export default instance