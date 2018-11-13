import news from '@/data/news.csv';

describe('news.csv', () => {
  test('news should have data and title', () => {
    expect(Array.isArray(news)).toBe(true);
    news.forEach(n => {
      expect(n.date).not.toBeUndefined();
      expect(n.title).not.toBeUndefined();
    });
  });

  test('data and title can not be empty', () => {
    news.forEach(n => {
      expect(n.date).not.toBe('');
      expect(n.title).not.toBe('');
    })
  })
});