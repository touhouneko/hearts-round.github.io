import rawStaffs from '@/data/staff.csv';

export interface IStaff {
  name: string;
  role: string;
  avatar: string;
  path: string;
  social: {
    bilibili: string;
    twitter: string;
    weibo: string;
  }
  description: ReadonlyArray<string>
}

const staffs: ReadonlyArray<IStaff> = rawStaffs.map(r => ({
  name: r.name,
  role: r.role,
  avatar: r.avatar,
  path: `/${encodeURI(r.name).toLowerCase()}`,
  social: {
    bilibili: r.social_bilibili,
    twitter: r.social_twitter,
    weibo: r.social_weibo
  },
  description: r.description.split(';')
}));
staffs[0].name='心界巡'
export default staffs;