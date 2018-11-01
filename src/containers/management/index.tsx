import * as React from 'react';
import { observer } from 'mobx-react';
import * as qs from 'query-string';

import AuthPage from './github-auth';
import globalStore from '@/global-store';

interface IProp {
  location?: {
    search: any;
  }
}

@observer
export default class Management extends React.Component<IProp> {
  public render() {
    const { githubToken = '', authoringFlag } = globalStore;
    if (githubToken === '' && authoringFlag === false)
      return (<AuthPage />)
    return (
      <div>
        123
      </div>
    );
  }
  componentDidMount() {
    const { code = '' } = qs.parse(this.props.location.search) as any;
    if (code === '') return;    
    globalStore.tryCalculateToken(code);
  }
}