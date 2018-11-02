import React from 'react';
import papaparse from 'papaparse';

import { IRawNews } from '@/data/news.csv';
import githubApis from '@/apis/github-api';
import { EditableNewsModel } from '@/models/news';
import { EAjaxStatus } from '@/types/enums';
import PageLoading from '@/containers/page-loading';
import TableRow from './row';
import { initState, reducer } from './reducer';
import tokenContext from '../pwd-context';
import './style.css';

const TableHeader = () => (
  <tr className="table__header">
    <th>id</th>
    <th>Date</th>
    <th>Title_chs</th>
    <th>Title_cht</th>
    <th>Title_jp</th>
    <th>Operation</th>
  </tr>
);

export default function NewsManagement() {
  const password = React.useContext(tokenContext);
  const [state, dispatch] = React.useReducer(reducer, initState);
  const [ajaxStatus, setAjaxStatus] = React.useState(EAjaxStatus.notSubmit);

  function handleSubmit(news: EditableNewsModel[], password: string) {
    const json: IRawNews[] = news.map(n => ({
      date: n.date,
      title_chs: n.title.chs,
      title_cht: n.title.cht,
      title_jp: n.title.jp
    }));
    const csv = papaparse.unparse(json);
    setAjaxStatus(EAjaxStatus.pending);
    githubApis.updateNews(csv, password).then(res => {
      setAjaxStatus(EAjaxStatus.success);
    }).catch(err => {
      alert('submission failed, please try again');
      setAjaxStatus(EAjaxStatus.failed);
      console.error(err);
    })
  }
  if (ajaxStatus === EAjaxStatus.pending)
    return (<PageLoading />)
  return (
    <form className="management__form management__form--news">
      <h2 className="form_title">
        News Management
      </h2>
      <table><tbody>
        <TableHeader />
        {state.news.map((n, idx) => (
          <TableRow
            news={n}
            idx={idx}
            key={idx}
            dispatch={dispatch}
          />)
        )}
      </tbody></table>
      <div className="form__buttons">
        <a
          onClick={handleSubmit.bind(null, state.news, password )}
          className="button button--submit clickable"
        >
          Submit
        </a>
        <a
          onClick={dispatch.bind(null, { type: 'ADD' })}
          className="button button--add clickable"
        >
          Add
        </a>
        <a
          onClick={dispatch.bind(null, { type: 'RESET' })}
          className="button button--reset clickable"
        >
          Reset
        </a>
      </div>
      {
        ajaxStatus === EAjaxStatus.success ? (
          <article className="form__result">
            <h3 className="result__title">Update News successfully</h3>
            <p>Please wait for few minutes before the update takes effect.</p>
            <p>Compilation progress can be found at &nbsp;
              <a href="https://travis-ci.org/hearts-round/hearts-round.github.io/branches">
                here
              </a>
            </p>
          </article>
        ) : null
      }
    </form>
  );
}
