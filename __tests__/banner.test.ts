import banners from '@/data/banner.csv';
import albums from '@/data/albums.json';

describe('banners.csv', () => {
  const fields = ['image', 'title', 'album_code'];
  const required = fields;

  test('all fields shall appear', () => {
    expect(Array.isArray(banners)).toEqual(true);
    banners.forEach(b => {
      fields.forEach(f => {
        expect((b as any)[f]).not.toBeUndefined();
      });
    });
  });

  test('all required fields shall be non-empty', () => {
    banners.forEach(b => {
      required.forEach(f => {
        expect((b as any)[f]).not.toEqual('');
      });
    });
  });

  test('album code shall exist', () => {
    banners.forEach(b => {
      const filtered = albums.filter(a => a.code === b.album_code);
      expect(filtered.length).toEqual(1);
    });
  });
});