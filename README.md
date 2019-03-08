

# Rabix Composer
[![Build Status](https://travis-ci.org/rabix/composer.svg?branch=master)](https://travis-ci.org/rabix/composer)

Rabix Composer is an open source editor for [Common Workflow Language](https://github.com/common-workflow-language/common-workflow-language) 
documents. 

It has a graphical mode allowing drag and drop creation of workflows
and wizard type creation of individual tools.

![Workflows!](doc/images/workflows.gif)

It also has a text mode for entering CWL code directly. The graphical and text
modes work seamlessly together.

![Graphical to Text and back again!](doc/images/visual_text.gif)

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

## Installation

```bash
git clone https://github.com/rabix/composer
cd composer
yarn install
```

**If you are using Linux:**

Install node.js from https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

Install yarn using Linux instructions provided on https://yarnpkg.com/lang/en/docs/install/

## Starting the dev environment
```bash
yarn run serve // starts the dev server
yarn run compile:electron // compiles electron backend
yarn run start:electron // opens the app shell
```

## Packaging the build as a desktop app for the host system and architecture
```bash
yarn run build
```

## Running the tests
```bash
yarn test
```

## Running a released version of the Composer

Donwload the releases packaged for the environment you are using:

### MacOs

Download the `rabix-composer-VERSION.dmg`, and double click on it

### Windows

Download the `rabix-composer.Setup.VERSION.exe` and double click on it

### Linux

Donwload the `rabix-composer-VERSION-x86_64.AppImage`, make it executable and then
launch it via the commandline (or double click on it, and execute it).

```
    chmod +x rabix-composer-VERSION-x86_64.AppImage
    ./rabix-composer-VERSION-x86_64.AppImage
```

## Documentation

Now you can read the [Rabix Composer documentation](http://docs.rabix.io/) to learn more about Rabix Composer.
