import works from '@/data/works.csv';

describe('works.csv', () => {
  const fields = ['principle','principle_url','title',
    'cover','info_1','info_2','video_bilibili',
    'video_niconico','video_youtube','original',
    'compose','arrange','lyric','illust','vocal',
    'pv','has_lyrics','ext_link'
  ];
  const required = ['principle','title',
    'info_1','video_bilibili', 'has_lyrics'
  ];

  test('all fields are contained', () => {
    expect(Array.isArray(works)).toBe(true);
    works.forEach(w => {
      fields.forEach(f => {
        expect((w as any)[f]).not.toBeUndefined();
      });
    });
  });

  test('some fields are required', () => {
    works.forEach(w => {
      required.forEach(f => {
        expect((w as any)[f]).not.toBe('');
      });
    });
  });

  test('has_lyrics shall be either true or false', () => {
    works.forEach(w => {
      expect(w.has_lyrics).toMatch(/^(true|false)$/);
    });
  });

  test('lyrics shall be able to be located', () => {
    // 001, 002, ... etc
    const indices = works.map((w, idx) => {
      if (w.has_lyrics === 'true') return idx;
      else return null;
    })
    .filter(i => i !== null)
    .map(i => ('00' + (i+1)).slice(-3));
    const promises = indices.map(i => import(`@/data/lyrics/works/${i}.csv`));

    return new Promise((resolve, reject) => {
      Promise.all(promises).then(lyrics => {
        lyrics.map(l => l.default).forEach(l => {
          expect(Array.isArray(l)).toBe(true);
          l.forEach((line: any) => {
            expect(line.left).not.toBeUndefined();
            expect(line.right).not.toBeUndefined();
          });
        });
        resolve();
      }).catch(reject);
    });
  });
});