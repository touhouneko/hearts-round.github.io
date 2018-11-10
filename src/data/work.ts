import rawWorks from '@/data/work.csv';
import { IWork, WorkModel } from '@/models/work';
import TrackAuthorModel from '@/models/author';

const works: ReadonlyArray<IWork> = rawWorks.map(w => new WorkModel(
  w.cover, {
    name: w.principle, link: w.principle_url
  }, new TrackAuthorModel({
    ...w
  }), {
    bilibili: w.video_bilibili,
    niconico: w.video_niconico,
    youtube: w.video_youtube
  }, w.ext_link, {
    top: w.info_1.split(';'),
    bottom: w.info_2
  }, `/works/${w.lyrics_idx}`
));

export default works;