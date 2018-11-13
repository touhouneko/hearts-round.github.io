import staffs from '@/data/staff.csv';

describe('staff.csv', () => {
  const fields = ['name','role','avatar','social_twitter',
    'social_bilibili','social_weibo','description'
  ];
  const required = ['name','role','description'];

  test('all fields shall appear', () => {
    expect(Array.isArray(staffs)).toBe(true);
    staffs.forEach(s => {
      fields.forEach(f => {
        expect((s as any)[f]).not.toBeUndefined();
      });
    });
  });

  test('all required fields for members are non-empty', () => {
    staffs.forEach((s, idx) => {
      if (idx === 0) return;
      required.forEach(f => {
        expect((s as any)[f]).not.toBe('');
      });
    });
  });

  test('site intro is correct', () => {
    expect(staffs[0].name).toEqual('');
    expect(staffs[0].role).toEqual('');
    expect(staffs[0].description).not.toEqual('');
  });
  
});
