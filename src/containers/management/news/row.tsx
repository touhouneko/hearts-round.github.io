import React from 'react';

import { EditableNewsModel } from '@/models/news';
import { IAction } from './reducer';

interface ITdInputProps {
  field: string;
  value: string;
  idx: number;
  editable: boolean;
  dispatch: (action: IAction) => void;
}
const TdInput = ({ field, value, editable, dispatch, idx }: ITdInputProps) => (
  <td>{
   editable ?
   (<input
    value={value}
    onChange={(ev) => dispatch({
      type: 'CHANGE',
      payload: {
        field,
        idx,
        value: (ev.target as HTMLInputElement).value
      }
    })}
   />) :
   (<span>{value}</span>)
  }</td>
);

interface IRowProps {
  news: EditableNewsModel;
  idx: number;
  dispatch: (action: IAction) => void
}
const TableRow = ({ news, idx, dispatch }: IRowProps) => (
  <tr className={`table__row ${news.edited ? 'edited': ''}`}>
    <td>{idx}</td>
    <TdInput field="date" value={news.date} dispatch={dispatch} editable={news.editable} idx={idx}/>
    <TdInput field="title" value={news.title} dispatch={dispatch} editable={news.editable} idx={idx}/>
    <td>
      <a
        onClick={dispatch.bind(null, { type: 'SAVE', payload: {idx}} )}
        className={`operation__button clickable ${news.editable ? '': 'hide'}`}
      >
        Save
      </a>
      <a
        onClick={dispatch.bind(null, { type: 'EDIT', payload: {idx}} )}
        className={`operation__button clickable ${news.editable ? 'hide': ''}`}
      >
        Edit
      </a>
      <a
        onClick={dispatch.bind(null, { type: 'UP', payload: {idx} })}
        className="operation__button clickable"
      >
        Up
      </a>
      <a
        onClick={dispatch.bind(null, { type: 'DOWN', payload: {idx} })}
        className="operation__button clickable"
      >
        Down
      </a>
      <a
        onClick={dispatch.bind(null, { type: 'DELETE', payload: {idx}})}
        className="operation__button clickable"
      >
        Delete
      </a>
    </td>
  </tr>
);

export default TableRow;