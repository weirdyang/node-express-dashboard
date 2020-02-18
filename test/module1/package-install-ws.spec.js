const fs = require('fs');
const path = require('path');

describe("package.json", () => {
  it('should contain ws dependency @package-install-ws', () => {
    const wsNodeModule = fs.existsSync(path.join(process.cwd(), 'node_modules/ws'));
    assert(wsNodeModule && packageFile.dependencies.ws !== undefined, "Have you installed the `ws` module using `npm install ws`?")
  });
});