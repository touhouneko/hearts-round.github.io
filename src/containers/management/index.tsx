import * as React from 'react';
import { observer } from 'mobx-react';

import AuthPage from './github-auth';
import parseQueryString from '@/utils/query-string';
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
    const { code = '' } = parseQueryString(this.props.location.search) as any;
    if (code === '') return;    
    globalStore.tryCalculateToken(code);
  }
}