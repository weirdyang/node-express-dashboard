const fs = require('fs');
const path = require('path');

describe('Install `ws` module', () => {
  it('should install ws dependency @app-install-ws', () => {
    const wsNodeModule = fs.existsSync(path.join(process.cwd(), 'node_modules/ws'));
    assert(wsNodeModule && packageFile.dependencies.ws !== undefined, "Have you installed the `ws` module using `npm install ws`?")
  });
});