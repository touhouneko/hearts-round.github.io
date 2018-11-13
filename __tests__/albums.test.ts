import albums from '@/data/albums.json';

describe('albums.json', () => {
  test('All fields should be valid', () => {
    expect(Array.isArray(albums)).toEqual(true);
    albums.forEach(a => {
      expect(a.code).toBeNonEmptyString();
      expect(a.name).toBeNonEmptyString();
      expect(a.date).toBeNonEmptyString();
      expect(a.cover).toBeNonEmptyString();
      expect(a.thanks).toBeNonEmptyString();
      expect(a.product_link).not.toBeUndefined();
      expect(a.product_link.taobao).toBeNonEmptyString();
      expect(a.product_link.tora).toBeStringOrUndefined();
      expect(Array.isArray(a.tracks)).toEqual(true);
      a.tracks.forEach(t => {
        expect(t.title).toBeNonEmptyString();
        expect(t.length).toBeNonEmptyString();
        expect(t.link).toBeStringOrUndefined();
        expect([true, false]).toContain(t.has_lyrics);
        expect(t.vocal).toBeStringOrUndefined();
        expect(t.original).toBeStringOrUndefined();
        expect(t.arrange).toBeStringOrUndefined();
        expect(t.composer).toBeStringOrUndefined();
        expect(t.pv).toBeStringOrUndefined();
        expect(t.illustrator).toBeStringOrUndefined();
        expect(t.lyrics).toBeStringOrUndefined();
      });
    });
  });

  test('all lyrics shall be able to be located', () => {
    const promises = albums.map(a => {
      const code = a.code;
      return a.tracks.filter(t => t.has_lyrics)
      .map((_, idx) => ('0' + (idx + 1)).slice(-2))
      .map(idx => import(`@/data/lyrics/${code}/${idx}.csv`));
    }).reduce((a, b) => a.concat(b), []);

    return new Promise((resolve, reject) => {
      Promise.all(promises).then(lyrics => {
        lyrics.map(l => l.default).forEach(l => {
          expect(Array.isArray(l)).toEqual(true);
          l.forEach((line: any) => {
            expect(line.left).not.toBeUndefined();
            expect(line.right).not.toBeUndefined();
          });
        });
        resolve();
      }).catch(reject);
    })
  })
});