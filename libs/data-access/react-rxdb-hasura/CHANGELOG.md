# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# 0.1.0 (2021-09-15)


### Bug Fixes

* better handling of form state, nullable values and input accepters ([578eb91](https://github.com/platyplus/platydev/commit/578eb91f62517a350cbaf92119bacf7c8fcea504))
* correct collections loading ([3766214](https://github.com/platyplus/platydev/commit/3766214b38a75e225044a7589ab15960812a9816))
* correct inline document label template ([5aaf57a](https://github.com/platyplus/platydev/commit/5aaf57a5c3aee4d99cc93512bcfed29bc258a31c))
* create document, and other improvements ([8b42fd9](https://github.com/platyplus/platydev/commit/8b42fd9e0e43df227d2ea48687a6346e18c5a736))
* de-regress ([2f9351a](https://github.com/platyplus/platydev/commit/2f9351a5ad544f1f837ca42bdb1696bbc5804a80))
* do not use relationships with absent remote table, and do not push non permitted columns ([6a7710a](https://github.com/platyplus/platydev/commit/6a7710a1d778f796aaee430a2543d2e9b56d9dd6))
* filter relationships with no table info ([1f90770](https://github.com/platyplus/platydev/commit/1f9077076e723d056d272b874a8a1317f5dce516))
* modify app config either through the migration API or the graphql API ([14dcf55](https://github.com/platyplus/platydev/commit/14dcf556fe8b4aa6e821bdd77d8ef732b8e2138c))
* solve multiple bugs ([ae7113f](https://github.com/platyplus/platydev/commit/ae7113fb3c02ebc31df2b827320478ffc4128e92))


### Features

* add default values when missing on insert/update - and refactor rxdb-hasura contents directory ([16f89d0](https://github.com/platyplus/platydev/commit/16f89d084d881e0d8f12fdb115f91b0bfc4636cd))
* app config as document contents, sortable menu, and refactoring ([65b77f1](https://github.com/platyplus/platydev/commit/65b77f1db86f93df601f8d31d014124dc104833c))
* better config navigation ([addbc3c](https://github.com/platyplus/platydev/commit/addbc3c053e9b324ca738ba36db09c51f2476d53))
* check if the user is allowed to remove items from a m2m relation ([aeafacc](https://github.com/platyplus/platydev/commit/aeafaccb3ea30ddeff6f6e3a8d359465ab2ee33a))
* column-level edit permisssions ([20d5aff](https://github.com/platyplus/platydev/commit/20d5aff7c5a8eb39a249833e9207941aa7572660))
* configurable property icon ([61ed9d4](https://github.com/platyplus/platydev/commit/61ed9d4f22f6b7cc032787a42f34aec01a5365e7))
* configuration module ([2e69a12](https://github.com/platyplus/platydev/commit/2e69a12f05ae1d92749539f2d97a37f237218e96))
* datepicker, numeric field and form reset ([d48d160](https://github.com/platyplus/platydev/commit/d48d16020de1684674fc767c7c7f348a35022ec8))
* detect form changes ([3fcb21e](https://github.com/platyplus/platydev/commit/3fcb21eb70795913ff4d357cda75e7a6cb5118aa))
* document details ([522fcda](https://github.com/platyplus/platydev/commit/522fcdaf7c48a9da6b37c4239a57b23ea82dfe22))
* edit label template when value is empty ([b4be0dc](https://github.com/platyplus/platydev/commit/b4be0dc7189ad5b394dba0c6ad5edb3d985af1f4))
* edit property titles ([f793a47](https://github.com/platyplus/platydev/commit/f793a472eb42a2b1065ce782131f66abb5f37426))
* editable label and create documents ([fd3368e](https://github.com/platyplus/platydev/commit/fd3368e74e7e4228b94209a9bb1583ff85c0914f))
* form validation structure, and make it work with required values ([8513b52](https://github.com/platyplus/platydev/commit/8513b5233d2990e54aced08538d6b8ab30a1bcc6))
* generate migrations for table and property config ([e53603c](https://github.com/platyplus/platydev/commit/e53603cd85f75c3e8a5bdbcd29690932c80e62a3))
* indexeddb adaptor, and better db initiation ([bd78e02](https://github.com/platyplus/platydev/commit/bd78e02bcaa4ff533080409e3e84b7ba96089f9c))
* make document and collection titles (almost) editable ([4ea45a7](https://github.com/platyplus/platydev/commit/4ea45a7b62d24ff3b4e29769c17fde040cc161bb))
* make metadata observable ([c9dd88d](https://github.com/platyplus/platydev/commit/c9dd88d9a31d741116378ce3db551c1b0fb02592))
* many to many ([9be9718](https://github.com/platyplus/platydev/commit/9be971873f36d4e142a6f19eed8a889391dc68ae))
* monitor network state ([15f43cf](https://github.com/platyplus/platydev/commit/15f43cf36985ed0968bf851bbfde070e9015f591))
* profile and react-rxdb-hasura libs ([4c4d7bf](https://github.com/platyplus/platydev/commit/4c4d7bf9656b6d8ed2ef7a1ca4817127365d7caf))
* reactive collection icon in the menu ([c8a7bf2](https://github.com/platyplus/platydev/commit/c8a7bf25407032c6f9c02b67ced6c457cb00477b))
* required many2one relationships, and some code refactoring ([2ab3794](https://github.com/platyplus/platydev/commit/2ab379423d9a5c34e06b7fa468723b19520a5e3e))
* reverse relationships, and lots of refactoring ([ecabef2](https://github.com/platyplus/platydev/commit/ecabef2080edac98a193e74e696c08fa169e6e11))
* save document ([ee5bb1f](https://github.com/platyplus/platydev/commit/ee5bb1feb3dd3a14b961bd02630210d499e4ab13))
* save property config migrations ([2f3f31e](https://github.com/platyplus/platydev/commit/2f3f31ede8bdad1d473613cac04adfe950c5e450))
* select multiple, and collection as label ([067928b](https://github.com/platyplus/platydev/commit/067928bfc777480fd71d044c40ba347bf818781e))
* smoother animation when loading components, and additional reactive metadata ([b4516a0](https://github.com/platyplus/platydev/commit/b4516a081b3885676e77626c1114e01d43958e2e))
* sortable properties ([3bd8310](https://github.com/platyplus/platydev/commit/3bd831068b0db08efdfe26b9e949bb4a0b3f0a0d))
* watch live schema changes: remove columns or properties ([53a96a7](https://github.com/platyplus/platydev/commit/53a96a7e24afd275033881dcf6c9a746996357f6))
* wIP edit property titles ([6265b66](https://github.com/platyplus/platydev/commit/6265b66f4d4016884b52f3647b61bdfeef112415))


### Performance Improvements

* avoid reloading title component needlessly ([6dff331](https://github.com/platyplus/platydev/commit/6dff331a57a526e8d2bf7db059fa183855aa4d88))
* generate batch config SQL migrations ([e6f045d](https://github.com/platyplus/platydev/commit/e6f045d540f13549e85ed42ff88ca96cb470bf01))
* unnest form hooks to avoid component re-rendering ([f2270d0](https://github.com/platyplus/platydev/commit/f2270d071e26a2dd62243990f0d8291f7bcf19f1))
* usememo ([bc91717](https://github.com/platyplus/platydev/commit/bc9171703fe4a44fec1ff545de3c92f87569dd57))