export interface IMultiLanguageText {
  chs: string;
  cht: string;
  jp: string;
}

export default class MultiLanguageText implements IMultiLanguageText {
  constructor(public chs: string, public cht: string, public jp: string) {}
}