describe('bin/www', () => {
  it('should contain fs require @www-require-fs', () => {
    let wss;
    try {
      wss = wwwModule.__get__('fs');
    } catch (err) {
      assert(wss !== undefined, 'Has the `fs` module been required and assigned to a `const` called `fs` in `www`?');
    }
  });
});