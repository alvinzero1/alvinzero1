## `vue add unit-jest`
* `npm init vue@latest` unable to create `jest`
``` console
$ vue create optiontest

Vue CLI v5.0.8
✨  Creating project in C:\Users\AlvinNg\zero1Wk31\optiontest.
🗃  Initializing git repository...
⚙️  Installing CLI plugins. This might take a while...

added 855 packages, and audited 856 packages in 46s

92 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
🚀  Invoking generators...
📦  Installing additional dependencies...

added 102 packages, and audited 958 packages in 7s

105 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
⚓  Running completion hooks...

📄  Generating README.md...

🎉  Successfully created project optiontest.
👉  Get started with the following commands:

 $ cd optiontest
 $ npm run serve

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31
$ cd optiontest

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31/optiontest (master)
$ npm run serve

```

``` console
$ vue add unit-jest

📦  Installing @vue/cli-plugin-unit-jest...


added 386 packages, and audited 1344 packages in 16s

118 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
✔  Successfully installed plugin: @vue/cli-plugin-unit-jest


🚀  Invoking generator for @vue/cli-plugin-unit-jest...
📦  Installing additional dependencies...


added 14 packages, and audited 1358 packages in 7s

118 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
⚓  Running completion hooks...

✔  Successfully invoked generator for plugin: @vue/cli-plugin-unit-jest

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31/optiontest (master)
```

``` console
$ npm run test:unit

> optiontest@0.1.0 test:unit
> vue-cli-service test:unit

 PASS  tests/unit/example.spec.js
  HelloWorld.vue
    √ renders props.msg when passed (32 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.247 s
Ran all test suites.

AzureAD+AlvinNg@LAPTOP-OJGI6SOT MINGW64 ~/zero1Wk31/optiontest (master)
```
