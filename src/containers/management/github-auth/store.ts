import { observable } from 'mobx';

import bindthis from '@/decorators/bindthis';
import { IStore } from './index';

class GitAuthStore implements IStore {
  @observable public clientId: string = 'f23ae7b1ad27bb19489c';

  @bindthis public handleSubmit() {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${this.clientId}`;
    window.location.replace(authUrl);
  }
}

const gitAuthStore = new GitAuthStore();
export default gitAuthStore;