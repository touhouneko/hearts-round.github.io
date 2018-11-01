import axios, { AxiosInstance } from 'axios';

export default abstract class BaseApi {
  protected axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({});
  }
}