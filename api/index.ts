import axios from 'axios';
const baseURL = `https://picsum.photos/`;
const API = axios.create({
  baseURL: baseURL,
});

export const getImages = () =>
  API.get(`/v2/list?page=1&limit=30`);