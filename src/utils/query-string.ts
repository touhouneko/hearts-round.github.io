// path = window.location.search.substring(1);
export default function getQueryVariable(query: string) {
  if (query === undefined || query === null || typeof query !== 'string')
    throw new Error(`query ${query} is not correct in @/utils/query-string.ts`);
  else if (query.length === 0)
    return {};
  else if (query[0] === '?')
    query = query.substr(1);
  const vars = query.split('&');
  const out: {[key: string]: string} = {};
  vars.forEach(v => {
    const [key = '', value = ''] = v.split('=');
    if (key !== '') out[key] = value;
  })
  return out;
}