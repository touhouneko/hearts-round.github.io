import { IMultiLanguageText } from '@/models/text';

export interface INews {
  date: string;
  title: IMultiLanguageText;
}

export default class NewsModel implements INews {
  constructor(public date: string, public title: IMultiLanguageText) {}
}