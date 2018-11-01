import * as qs from 'query-string';

import BaseApi from './base-api';

class GithubApi extends BaseApi {
  public calculateToken(code: string): Promise<string> {
    const lambdaUrl = 'https://tlcllgwvb5.execute-api.ap-southeast-2.amazonaws.com/default/github_oath';
    return new Promise((resolve, reject) => {
      this.axiosInstance.get(`${lambdaUrl}?&code=${code}`).then(res => {
        const { data = '' } = res;
        const { error = '', access_token = '' } = qs.parse(data) as any;
        if (access_token !== '')
          resolve(access_token);
        else
          reject(error)
      }).catch(reject)
    });
  }
}

const githubApi = new GithubApi();
export default githubApi;