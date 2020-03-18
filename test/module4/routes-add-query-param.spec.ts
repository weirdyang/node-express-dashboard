const fs = require('fs');
const path = require('path');

describe("routes/index.js", () => {
  it('`routes/index.js` should exist  @routes-add-query-param', () => {
    assert(fs.existsSync(path.join(process.cwd(), 'routes')), 'The `routes` dir does not exist.');
    assert(
      fs.existsSync(path.join(process.cwd(), 'routes/index.js')),
      'The `src/routes/accounts.js` file does not exist.'
    );
  });
});