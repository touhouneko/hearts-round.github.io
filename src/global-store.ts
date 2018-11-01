import { action, observable } from 'mobx';

import githubApi from '@/apis/github-api';

class GlobalStore {
  @observable public githubToken: string = '';
  @observable public authoringFlag = false;

  @action.bound public tryCalculateToken(code: string): void {
    this.authoringFlag = true;
    githubApi.calculateToken(code).then(token => {
      this.githubToken = token;
      this.authoringFlag = false;
    }).catch(err => {
      alert('login failed');
      console.error(err);
    });
  }
}

const globalStore = new GlobalStore();
export default globalStore;