---
id: todo
title: To do list
sidebar_label: To do list
---

## MVP

- [ ] Application
  - [ ] **foreign key constraints**
    - [ ] onDelete constraint
      - [x] m2m specific case
      - [ ] cascade
      - [ ] set null - only when columns are nullable - throw error otherwise
      - [ ] restrict - idem
      - [ ] no action - idem
      - [ ] set default - only when default exists or columns are nullable
    - [ ] onUpdate
    - [ ] bug on validating form with a required many2one field: is it related?
  - [ ] bug: refetch the entire collection when new columns/relationships are added
  - [ ] canSave: validate data
    - [ ] only when fk constraints allow it
    - [ ] only when required fields (with no default) are present
  - [ ] **improve online/offline mode** (replication, jwt, logout...) both on dev (memory) and prod (indexeddb)
  - [ ] Improve login/register errors and validation
  - [ ] UI Toast warnings and errors
- [ ] Platyplus Helm Chart
  - [ ] nx platyplus:version
- [ ] Documentation
  - [ ] Pitch, main features + feature matric
  - [ ] Main features
  - [ ] Configuration guide
    - [ ] 'basic'
    - [ ] extend Platyplus
  - [ ] Installation guide / getting started
    - [ ] Dev
      - [ ] Docker-compose
      - [ ] Tilt
    - [ ] Deploy
      - [ ] Docker-compose
      - [ ] Kubernetes
  - [ ] Technical documentation
    - [ ] Schema on how RxDB starts (auth/jwt, metadata, config, contents...)
    - [ ] readme for every Docker image
    - [ ] readme for every Helm chart
    - [ ] readme for evey NPM package
    - [ ] contribute
  - [ ] boilerplate / template project (tilt/docker-compose)
- [ ] service worker: get bundle after it changed
- [ ] remove infrastructure app / reshape it to pulumi-e2e?
- [ ] clean old platuplus/hasura docker image from previous migrations
- [ ] home page doesn't render when no platyplus.tables record in postgres
- [ ] just after creating a table, the client needs to be reloaded, otherwise a created record is not rendered correctly although synced in the backend :/
- [ ] when changing the permission to make a table deletable, need to reload the client

## MVP 2

- [ ] Hasura Auth
  - [ ] Helm chart
    - [ ] latest Alpine version - see https://artifacthub.io/packages/helm/platyplus/hasura-backend-plus?modal=security-report
  - [ ] Tilt extension
- Application
  - [ ] reset/change password
  - [ ] avatar picker (image-url component)
  - [ ] prefix `platyplus_` all the internal collections
  - [ ] home page (pages table, at this stage as a singleton)
- [ ] Platyplus Tilt extension

## Post-MVP

- Application
  - [ ] destroy database on logout
  - [ ] nullable values vs default values vs form values
  - [ ] work on form validation rules
    - [ ] Postgres domain e.g. email
    - [ ] number/string min/max
    - [ ] varchar(x) -> validate string length < x
    - [ ] something else stored in `property_conig`
      - [ ] frontend validation
      - [ ] backend validation?
  - [ ] computed properties
    - [ ] transient / generated on-the-fly
    - [ ] locally persisted
    - [ ] isomorphic
  - [ ] some components:
    - [ ] one2one
      - [ ] update sync of reverse relationship
    - [ ] maps & PostGIS
      - [ ] point field: location/single dot
      - [ ] collection / many2one: polygon, multiple dots
    - [ ] complete every field component
      - [ ] ipv4 / ipv6
      - [ ] hostname
      - [ ] object
      - [ ] array
      - [ ] uri

## Then

- Application
  - [ ] handle relationships like rxdb-utils views
  - [ ] multi-role
    - [ ] link-reverse: when a document is modified in a role collection, it must be reflected to other roles...
    - [ ] config module only covers one role - see pages/config/table.tsx
      - [ ] => fetch only one me_metadata table for all roles???
    - [ ] (multi-role bug) push/pull replication: add the current hasura-role to the headers
  - [ ] list Hasura features to be mapped to RxDB e.g.
    - [ ] details on permissions
  - [ ] permissions
  - [ ] add Hasura permissions to create/update/remove permissions
  - [ ] custom menus
    - [ ] for everyone / per role / per user
  - [ ] automate required permissions and fields e.g. updated_at, id etc on the backend (to simplify adding tables to the application)
- Hasura Schema sharing? (https://hasura.io/events/hasura-con-2021/talks/hasura-schema-sharing/)
- Charts
  - [ ] Hasura: wait for postrges service to be ready
  - [ ] HBP: wait for hasura service to be ready
  - [ ] Publish chart in awesome Hasura
- [ ] Nx & npm semver
- [ ] online demo(s)?
- [ ] Main website cleanup - remove charts tab and link to artifacthub
- [ ] packages: update README.md
- [ ] https://stackoverflow.com/questions/57927115/anyone-know-a-way-to-delete-a-workflow-from-github-actions/65374631#65374631

## Next

- Application
  - [ ] map metadata views and tables with camelCase
  - [ ] push only columns that have changed
  - [ ] internationalisation
  - [ ] conflict resolution
  - [ ] map custom GraphQL names vs PostgreSQL names
  - [ ] encryption
  - [ ] unique columns or sets of columns: tricky. in a hook? don't forget to index. See https://github.com/pubkey/rxdb/issues/728
- Charts
  - [ ] argocd that deploys applications (chartmuseum)
  - [ ] Nx and Helm charts?
  - [ ] Improve Helm Chart production/development values
  - [ ] PostgreSql HA https://github.com/bitnami/charts/tree/master/bitnami/postgresql-ha
- [ ] Custom Express/Koa service
- [ ] in every package.json: add keywords
- [ ] review TODOs in the code

## Later

- [ ] RxDB attachments and hbp storage
- [ ] realtime metadata without reloading the entire collection on every change
- [ ] `values.schema.json` in Helm Charts, and other artifacthub annotations
- [ ] rabbitmq docker, helm & template?
- [ ] hasura init container: wait for postgres
- [ ] hbp init container: wait for hasura (and for minio?)
- [ ] standard init container: wait for connected services
- [ ] move templates to the root folder?
- [ ] vite template -> `serviceTypeConfig.command = "yarn create {{xyz}}"`
- [ ] when fetching HBP metadata/migrations:
  - `git clone --filter` only the required directories
  - copy only sql files of the migrations (Hasura config v1), not the yaml files (Hasura config 1)
- [ ] clean legacy Helm Charts (artifacthub annotation bug): download old tar.gz files, remove annotation, re-package upload, move back to the right S3 storage

## Parked

- [ ] dark/light mode
  - [ ] rsuite next -> when CSS variables are available
  - [ ] from device's defaults
  - [ ] store in localstorage
  - [ ] store in the backend?
- [ ] Solve the PostgreSQL password change problem, e.g. in a pre upgrade hook batch?
  - See: https://github.com/bitnami/charts/issues/2061
- [ ] Include external files (Helm 3.6)
  - Install/upgrade/rollback Hasura migrations
  - Use it for HBP configuration files
  - As a result: remove Hasura & HBP dockerfiles in devtools
  - Then, move helm directory to the project directory?
  - Then, review HBP template and functionning with storage rules embedded in `values.yaml`
  - See: https://github.com/helm/helm/issues/3276
- [ ] Hasura Auth
  - [ ] Helm Chart
  - [ ] Tilt module