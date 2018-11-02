import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default abstract class BaseApi {
  protected axiosInstance: AxiosInstance;
  constructor(config: AxiosRequestConfig = {}) {
    this.axiosInstance = axios.create(config);
  }
}