### This is a repo with a bare minimum of configuration to demonstrate the different behavior of eslint-plugin-import versions

## results w/ eslint-plugin-import v2.20.1
```
$ eslint src/app/base.js

C:\local\code\eslint-import-extraneous-issue-simple\src\app\base.js
  15:7   error  'nonexistantPackage' is assigned a value but never used  no-unused-vars
  15:36  error  Unable to resolve path to module 'nonexistant-package'   import/no-unresolved

✖ 2 problems (2 errors, 0 warnings)
```

## results w/ eslint-plugin-import v2.18.2
```
$ eslint src/app/base.js

C:\local\code\eslint-import-extraneous-issue-simple\src\app\base.js
  10:11  warning  'lodash' should be listed in the project's dependencies. Run 'npm i -S lodash' to add it  import/no-extraneous-dependencies
  15:7   error    'nonexistantPackage' is assigned a value but never used                                   no-unused-vars
  15:36  error    Unable to resolve path to module 'nonexistant-package'                                    import/no-unresolved

✖ 3 problems (2 errors, 1 warning)
```