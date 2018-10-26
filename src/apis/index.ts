import news from '@/data/news';

import { INews } from '@/models/news';

class Apis {
  public getNews(): Promise<INews[]> {
    return new Promise((resolve, reject) => {
      resolve(news);
    });
  }
}
const apis = new Apis();
export default apis;