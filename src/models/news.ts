import bindthis from '@/decorators/bindthis';
import IEditable from './editable';

export interface INews {
  date: string;
  title: string;
}

export default class NewsModel implements INews {
  constructor(public date: string, public title: string) {}
}

export class EditableNewsModel implements INews, IEditable {
  public editable: boolean = false;
  public edited: boolean = false;
  public editing: boolean = false;
  constructor(private readonly news: INews = new NewsModel('','')){}
  public get date(){
    return this.news.date;
  }
  public set date(val: string) {
    this.news.date = val;
  }
  public get title() {
    return this.news.title;
  }
  public set title(val: string) {
    this.news.title = val;
  }
  @bindthis public addEditEffect(timeout: number = 0) {
    this.edited = true;
    setTimeout(() => this.edited = false, timeout);
  }
}