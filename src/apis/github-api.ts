import sha256 from 'sha256';

import bindthis from '@/decorators/bindthis';
import BaseApi from './base-api';

class GithubApi extends BaseApi {
  @bindthis private updateFile(file: string, path: string, password: string): Promise<unknown> {
    const hashedPwd = sha256(password).toUpperCase();
    const content = btoa(unescape(encodeURIComponent(file)));
    const url = 'https://kmtcckw6m9.execute-api.ap-southeast-2.amazonaws.com/prod/content';
    return this.axiosInstance.put(`${url}?path=${path}&content=${content}&password=${hashedPwd}`);
  }

  @bindthis public updateNews(file: string, password: string): Promise<unknown> {
    return this.updateFile(file, 'src/data/news.csv', password);
  }
}

const githubApi = new GithubApi();
export default githubApi;