import MultiLanguageText, { IMultiLanguageText } from '@/models/text';
import bindthis from '@/decorators/bindthis';
import IEditable from './editable';

export interface INews {
  date: string;
  title: IMultiLanguageText;
}

export default class NewsModel implements INews {
  constructor(public date: string, public title: IMultiLanguageText) {}
}

export class EditableNewsModel implements INews, IEditable {
  public editable: boolean = false;
  public edited: boolean = false;
  public editing: boolean = false;
  constructor(private readonly news: INews = new NewsModel('', new MultiLanguageText())){}
  public get date(){
    return this.news.date;
  }
  public set date(val: string) {
    this.news.date = val;
  }
  public get title() {
    return this.news.title;
  }
  @bindthis public addEditEffect(timeout: number = 0) {
    this.edited = true;
    setTimeout(() => this.edited = false, timeout);
  }
}