# vue-testing

ref: https://www.vuemastery.com/blog/unit-testing-in-vue-your-first-test/

``` console

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31
$ vue create vue-testing


Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Linter, Unit
? Choose a version of Vue.js that you want to start the project with 3.x
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated
config files
? Save this as a preset for future projects? No


Vue CLI v5.0.8
✨  Creating project in C:\Users\AlvinNg\zero1Wk31\vue-testing.
🗃  Initializing git repository...
⚙️  Installing CLI plugins. This might take a while...


added 1238 packages, and audited 1239 packages in 57s

106 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
🚀  Invoking generators...
📦  Installing additional dependencies...


added 104 packages, and audited 1343 packages in 9s

117 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project vue-testing.
👉  Get started with the following commands:

 $ cd vue-testing
 $ npm run serve


AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31
$ ls
230412vue-init.zip  Skeleton-2.0.4/     testhtml/  vue-testing/
newFolder/          Skeleton-2.0.4.zip  vue-init/

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31
$ cd vue-testing

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31/vue-testing (master)
$ ls
babel.config.js  node_modules/      public/    tests/
jest.config.js   package.json       README.md  vue.config.js
jsconfig.json    package-lock.json  src/

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31/vue-testing (master)
$ cat package.json
{
 ...
    "@vue/cli-plugin-unit-jest": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/test-utils": "^2.0.0-0",
    "@vue/vue3-jest": "^27.0.0-alpha.1",
    "babel-jest": "^27.0.6",
    "eslint": "^7.32.0",
    "eslint-plugin-vue": "^8.0.3",
    "jest": "^27.0.5"
  }


AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31/vue-testing (master)
$ ls
babel.config.js  node_modules/      public/    tests/
jest.config.js   package.json       README.md  vue.config.js
jsconfig.json    package-lock.json  src/


AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31/vue-testing (master)
$ npm run test:unit

> vue-testing@0.1.0 test:unit
> vue-cli-service test:unit

 PASS  tests/unit/example.spec.js
  HelloWorld.vue
    √ renders props.msg when passed (32 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.887 s
Ran all test suites.

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31/vue-testing (master)
$

```
