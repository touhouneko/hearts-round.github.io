import news from '@/data/news';
import { EditableNewsModel } from '@/models/news';


export interface IState {
  news: EditableNewsModel[];
};
export interface IAction {
  type: string;
  payload: any;
};
export const initState = {
  news: news.map(n => new EditableNewsModel(n))
};

export function reducer(state: IState, { type, payload }: IAction) {
  let idx: number;
  switch(type) {
    case 'ADD':
      const newNews = new EditableNewsModel();
      newNews.editable = true;
      newNews.edited = true;
      state.news = [newNews, ...state.news];
      break;
    case 'UP':
      idx = payload.idx;
      if (idx <= 0) break;
      const tempUp = state.news[idx];
      state.news[idx] = state.news[idx-1];
      state.news[idx-1] = tempUp;
      state.news[idx].edited = true;
      state.news[idx-1].edited = true;
      break;
    case 'DOWN':
      idx = payload.idx;
      if (idx < 0 || idx >= state.news.length - 1) break;
      const tempDown = state.news[idx];
      state.news[idx] = state.news[idx+1];
      state.news[idx+1] = tempDown;
      state.news[idx].edited = true;
      state.news[idx+1].edited = true;
      break;
    case 'RESET':
      state.news = news.map(n => new EditableNewsModel(n));
      break;
    case 'SAVE':
      state.news[payload.idx].editable = false;
      break;
    case 'EDIT':
      state.news[payload.idx].editable = true;
      break;
    case 'DELETE':
      state.news = state.news.filter((_, idx) => idx !== payload.idx);
      break;
    case 'CHANGE':
      switch(payload.field) {
        case 'date':
          state.news[payload.idx].date = payload.value;
          break;
        case 'title_chs':
          state.news[payload.idx].title.chs = payload.value;
          break;
        case 'title_cht':
          state.news[payload.idx].title.cht = payload.value;
          break;
        case 'title_jp':
          state.news[payload.idx].title.jp = payload.value;
          break;
      }
      state.news[payload.idx].edited = true;
      break;
  }
  return {...state};
}