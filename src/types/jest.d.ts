declare namespace jest {
  interface Matchers<R> {
    toBeNonEmptyString: () => void;
    toBeStringOrUndefined: () => void;
  }

  interface Expect {
    toBeNonEmptyString: () => void;
    toBeStringOrUndefined: () => void;
  }
}