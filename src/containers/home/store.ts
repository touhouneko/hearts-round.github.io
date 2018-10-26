import { observable, action } from 'mobx';

import apis from '@/apis';
import { INews } from '@/models/news';

class HomeStore {
  @observable public news: INews[] = [];

  @action public fetchNews(): void {
    apis.getNews().then((news: INews[]) => {
      this.news = news;
    }).catch(() => {
      console.error('error in reading news');
    })
  }
}

const homeStore = new HomeStore();
export default homeStore;