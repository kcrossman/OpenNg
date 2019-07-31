# OpenNg
This is a boilerplate Angular Library project with some useful components, directives, etc. for you to use as your own. I don't really intend on publish this package, though feel free to fork it and do what you will with it.

Github: https://github.com/kcrossman/OpenNg

Docs: https://kcrossman.github.io/OpenNg/ (compodoc, generated documentation)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## From Scratch
These are the commands I ran to generate the project, aside from configuration... For configuration, see project files.

1) `ng new open-ng --style=scss --createApplication=false --skip-git --skip-install`
2) `ng g library open-ng-lib --skip-install`
3) _(optional)_ `ng g application open-ng-demo --style=scss --routing --minimal --skip-install`
4) `npm i`
5) `ng update rxjs`
6) _(optional)_ `npm i @compodoc/compodoc --save-dev`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
