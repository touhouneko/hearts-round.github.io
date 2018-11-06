import rawStaffs from '@/data/staff.csv';

export interface IStaffIntroduction {
  name: string;
  avatar: string;
  social: {
    bilibili: string;
    twitter: string;
    weibo: string;
  }
  description: ReadonlyArray<string>
}
export interface IStaff {
  name: string;
  role: string;
  path: string;
  introduction: ReadonlyArray<IStaffIntroduction>
}

const otherStaffIntros: IStaffIntroduction[] = [];
rawStaffs.filter(r => r.role === 'others').forEach(r => {
  otherStaffIntros.push({
    name: r.name,
    avatar: r.avatar,
    social: {
      bilibili: r.social_bilibili,
      twitter: r.social_twitter,
      weibo: r.social_weibo
    },
    description: r.description.split(';')
  })
});
const otherStaffs: IStaff = {
  name: 'Others',
  path: '/others',
  role: '',
  introduction: otherStaffIntros
};

const regularStaffs: ReadonlyArray<IStaff> = rawStaffs
.filter(r => r.role !== 'others')
.map(r => ({
  name: r.name,
  role: r.role,
  path: `/${encodeURI(r.name).toLowerCase()}`,
  introduction: [{
    name: r.name,
    avatar: r.avatar,
    social: {
      bilibili: r.social_bilibili,
      twitter: r.social_twitter,
      weibo: r.social_weibo
    },
    description: r.description.split(';')
  }]
}));
regularStaffs[0].name = '心界巡'
regularStaffs[0].introduction[0].name = regularStaffs[0].name
export default [...regularStaffs, otherStaffs];