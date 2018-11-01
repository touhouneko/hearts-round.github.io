import * as React from 'react';

import AuthPage from './github-auth';
import githubApi from '@/apis/github-api';
import parseQueryString from '@/utils/query-string';
import PageLoading from '../page-loading';

interface IProp {
  location?: {
    search: any;
  }
}

export default function ManagementPage({ location }: IProp) {
  const [token, setToken] = React.useState('');
  const [authoringFlag, setAuthoringFlag] = React.useState(false);

  React.useEffect(() => {
    const { code = '' } = parseQueryString(location.search) as any;
    if (code === '') return;
    setAuthoringFlag(true);
    githubApi.calculateToken(code).then(token => {
      setToken(token);
      setAuthoringFlag(false);
    }).catch(err => {
      alert('login failed');
      setAuthoringFlag(false);
      console.error(err);
    });
  }, [])

  if (token === '' && authoringFlag === false)
    return (<AuthPage />);
  else if (authoringFlag === true)
    return (<PageLoading />);
  else
    return (<div>123</div>);
}


//   componentDidMount() {
//     const { code = '' } = parseQueryString(this.props.location.search) as any;
//     if (code === '') return;    
//     globalStore.tryCalculateToken(code);
//   }
// }