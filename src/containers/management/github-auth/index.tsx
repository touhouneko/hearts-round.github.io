import * as React from 'react';
import { observer } from 'mobx-react';

import localStore from './store';

export interface IStore {
  clientId: string;

  handleSubmit: () => any;
}

interface IProp {
  location?: any;
}

@observer
export default class GithubAuthPage extends React.Component<IProp> {
  private localStore: IStore = localStore;
  public render() {
    return (
      <main className="auth__container">
        <form className="auth__form">
          <a
            onClick={this.localStore.handleSubmit}
          >
            login
          </a>
        </form>
      </main>
    );
  }
}
