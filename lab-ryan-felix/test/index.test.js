const expect = require('expect');

describe('testing CLI', () => {
  let stdoutText;
  const normalStdout = process.stdout;
  before(() => {
    process.stdout = {
      write: (text) => stdoutText = text,
    };
  });

  it('should have some text in it', () => {
    expect(stdoutText).toExist();
  });

  after(() => {
    process.stdout = normalStdout;
  });
});

// unfortunately I'm not sure how to get from here to actually running the test :(
// fun challenge though!
