import videos from '@/data/videos.csv';
import albums from '@/data/albums.json';

describe('videos.csv', () => {
  const fields = ['album_code','track_id','cover','id_youtube','id_bilibili','id_niconico'];
  const required = ['album_code', 'track_id', 'cover', 'id_bilibili'];

  test('all fields are contained', () => {
    expect(Array.isArray(videos)).toBe(true);
    videos.forEach(v => {
      fields.forEach(f => {
        expect((v as any)[f]).not.toBeUndefined();
      });
    });
  });

  test('required fields are non-empty', () => {
    videos.forEach(v => {
      required.forEach(f => {
        expect((v as any)[f]).not.toBe('');
      });
    });
  });

  test('track id shall be positive integer', () => {
    videos.forEach(v => {
      expect(v.track_id).not.toBeNaN();
      const int = parseInt(v.track_id, 10);
      const float = parseFloat(v.track_id);
      expect(int).toEqual(float);
      expect(int).toBeGreaterThanOrEqual(1);
    });
  });

  test('the album and the track shall exist', () => {
    videos.forEach(v => {
      const filtered = albums.filter(a => a.code === v.album_code);
      expect(filtered.length).toBe(1);
      const [theAlbum] = filtered;
      const trackIdx = parseInt(v.track_id, 10) - 1;
      expect(theAlbum.tracks[trackIdx]).not.toBeUndefined();
    });
  });
});