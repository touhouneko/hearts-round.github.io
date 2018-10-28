import { observable, action, computed } from 'mobx';
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import apis from '@/apis';
import NewsModal, { IModalStore } from './modal';
import { INews } from '@/models/news';
import modalFactory from '@/components/modal/factory';

class NewsModalStore implements IModalStore {
  @observable private readonly newsArray: INews[];
  @observable private newsIdx: number;
  @computed public get nextLabel(): string {
    if (this.newsIdx >= this.newsArray.length - 1) return '';
    return '下一条';
  }
  @computed public get prevLabel(): string {
    if (this.newsIdx <= 0) return '';
    return '上一条';
  }
  @computed public get theNews(): INews {
    if (this.newsIdx >= 0 && this.newsIdx < this.newsArray.length)
      return this.newsArray[this.newsIdx];
    return null;
  }
  constructor(newsArray: INews[], idx: number, private readonly container: HTMLDivElement) {
    this.newsArray = newsArray;
    this.newsIdx = idx;
  }
  @action.bound handleNext() {
    this.newsIdx++;
  }
  @action.bound handlePrev() {
    this.newsIdx--;
  }
  @action.bound handleClose() {
    unmountComponentAtNode(this.container);
    modalFactory.turnoffMask(this.container);
  }
}

class HomeStore {
  @observable public news: INews[] = [];

  @action public fetchNews(): void {
    apis.getNews().then((news: INews[]) => {
      this.news = news;
    }).catch(() => {
      console.error('error in reading news');
    })
  }

  @action.bound public popupNews(idx: number): void {
    const container = modalFactory.createFullscreenMask();
    const modalStore = new NewsModalStore(this.news, idx, container);
    render(
      <NewsModal store={ modalStore } />,
      container);
    document.getElementsByTagName('body')[0].appendChild(container);
  }
}

const homeStore = new HomeStore();
export default homeStore;