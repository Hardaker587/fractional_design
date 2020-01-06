# get-relative-path

[![](https://img.shields.io/npm/v/get-relative-path.svg)](https://www.npmjs.com/package/get-relative-path)

Work out what the relative path to get from `from` to `to` is.
i.e. Starting at `from`, what path would lead us to `to`.

Similar to Node.js's [path.relative()](https://nodejs.org/api/path.html#path_path_relative_from_to)
but works outside the context of a filesystem, and assumes
all paths are POSIX-style.
So this also works for URL pathnames.

```
npm install get-relative-path
```

```js
const getRelativePath = require('get-relative-path');

console.log(getRelativePath('/data/orandea/test/aaa/', '/data/orandea/impl/bbb'));
// ../../impl/bbb

console.log(getRelativePath('data/orandea/test/aaa/', 'data/orandea/impl/bbb'));
// ../../impl/bbb

console.log(getRelativePath(
  new URL('https://localhost/data/orandea/test/aaa/').pathname,
  new URL('https://localhost/data/orandea/impl/bbb').pathname
))
// ../../impl/bbb

```