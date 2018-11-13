import illustrations from '@/data/gallery.csv';
import albums from '@/data/albums.json';

describe('gallery.csv', () => {
  const fields = ['url_cover','url_modal','url_origin',
    'author_name','author_url','album_code','track_idx'
  ];
  const required = ['url_cover','url_modal','url_origin',
    'author_name'
  ];

  test('all fields shall appear', () => {
    expect(Array.isArray(illustrations)).toEqual(true);
    illustrations.forEach(i => {
      fields.forEach(f => {
        expect((i as any)[f]).not.toBeUndefined();
      });
    });
  });

  test('all required fields shall be non-empty', () => {
    illustrations.forEach(i => {
      required.forEach(f => {
        expect((i as any)[f]).not.toEqual('');
      });
    });
  });

  test('track id shall be positive integer', () => {
    illustrations.forEach(i => {
      if (i.track_idx === '')
        expect(i.album_code).toEqual('');
      else {
        expect(i.track_idx).not.toBeNaN();
        const int = parseInt(i.track_idx, 10);
        const float = parseFloat(i.track_idx);
        expect(int).toEqual(float);
        expect(int).toBeGreaterThanOrEqual(1);
      }
    });
  });

  test('the album and the track can be found if appear', () => {
    illustrations.forEach(i => {
      if (i.album_code === '')
        expect(i.track_idx).toEqual('');
      else {
        const filtered = albums.filter(a => a.code === i.album_code);
        expect(filtered.length).toEqual(1);
        const idx = parseInt(i.track_idx, 10);
        expect(filtered[0].tracks[idx]).not.toBeUndefined();
      }
    });
  });
});