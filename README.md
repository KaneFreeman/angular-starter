# angular-starter
 [![DepShield Badge](https://depshield.sonatype.org/badges/KaneFreeman/angular-starter/depshield.svg)](https://depshield.github.io)

An opinionated starter package for angular 6+. This package includes Redux, SASS, Material, and Bootstrap (utility only). This package utilizes the [angular-redux-util](https://github.com/KaneFreeman/angular-redux-util) library.

## Table of Contents

  * [Folder Structure](#folder-structure)
  * [SASS / Global Styling](#sass--global-styling)
    * [Bootstrap](#bootstrap)
    * [Angular Material](#angular-material)
  * [Routing](#routing)
  * [Development Server](#development-server)
    * [From VSCode](#from-vscode)
  * [Build (All Environments)](#build-all-environments)
  * [Cloud Foundry Deployments](#cloud-foundry-deployments)
    * [Production](#production)
    * [App Dynamics Setup](#app-dynamics-setup)
  * [Linting](#linting)
  * [Running unit tests](#running-unit-tests)
  * [Running end-to-end tests](#running-end-to-end-tests)
  * [Further help](#further-help)

## Folder Structure
The folder structure under `src/app/` is laid out in the following manner:

|Folder|Description|
|---|---|
|actions|All redux action services|
|components|All angular components (.ts, .html, and .scss files), organized into subfolders by section of the application and page as appropriate|
|directives|Any custom angular directives|
|enums|Any [typescript enums](https://www.typescriptlang.org/docs/handbook/enums.html)|
|guards|All route guards|
|model|All model classes|
|pipes|Any custom angular pipes|
|reducers|All redux reducers|
|actions|The redux store definition and configuration|
|services|All injectable angular services|

## SASS / Global Styling

For global stylings `src/styles/application.scss` is the entry point, which includes all other global SASS files. Mixings and variables are imported via the `src/styles/_core.scss` which can be included in any component SASS files to gain access to the global mixinis and variables.

### Bootstrap

The setup compiles the Bootstrap SASS code (via `src/styles/_bootstrap.scss`, only the non-component parts like the grid, mixins and variables) as part of the build process. This allows for editing of the bootstrap variables, including adding extra breakpoints and changing the number of columns in a row of the grid.

This example has the following breakpoints:

|Breakpoint|Width|
|---|---|
|xs|0|
|sm|576px|
|md|768px|
|lg|992px|
|xl|1200px|
|xxl|1600px|

This example also defines a row as having 24 columns instead of the default 12.

### Angular Material

The setup includes and uses the [Angular Material](https://material.angular.io/) library that contains components styled with Material Design. The theme for Angular Material is setup in `src/styles/_md_theme.scss`.

## Routing

By default all routing is done from the `app-routing.module.ts` in `src/app/`. Based on the complexity of the application, submodules made be needed. These submodules should be placed with the components they server under the `components`.

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### From VSCode

Run build task (Ctrl + Shift + b) to start the ng serve process.

## Build (All Environments)

Run `npm run build` to build the project. The build artifacts will be stored in the `dist\angular-starter\` directory.

## Cloud Foundry Deployments

Run `cf push angular-starter -p dist\angular-starter -f manifest-dev.yml` to push the application to the development environment. This starter package utilizes a modified version of the [cloud foundry staticfile](https://github.com/KaneFreeman/staticfile-buildpack).

### Production

Replace the manifest file with the production version `manifest-prod.yml` when running the push command.

### App Dynamics Setup

Change the `app_dynamics.app_key` setting in the `app_config` environment variable to complete the setup of your app dynamics browser app. If provided, the application will automatically connect to app dynamics and start transmitting data.

## Linting

Run `ng lint` to lint the files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
