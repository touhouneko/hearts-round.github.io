// import expectElement from 'expect-element';

expect.extend({
  toBeNonEmptyString(received) {
    let messages = `expected ${received}`;
    let pass = false;
    if (received === undefined || received === null)
      messages += 'not to be undefined or null';
    else if (typeof received !== 'string')
      message += 'to be string';
    else if (received === '')
      message += 'to be non-empty';
    else
      pass = true;
    return {
      message: () => messages,
      pass
    }
  },
  toBeStringOrUndefined(received) {
    return {
      message: () => `expected ${received} to be string or undefined`,
      pass: typeof received === 'string' || typeof received === 'undefined'
    }
  }
});