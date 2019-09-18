import axios from 'axios';

export const API = axios.create({
  baseURL: `https://anatta-demo-app.herokuapp.com/api`
})