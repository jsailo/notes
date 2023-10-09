---
slug: handy-yarn-npm-commands
sidebar_position: 4
title: Handy Yarn and NPM commands
---

## Yarn commands

To build locally.
```bash
yarn build
```
To start yarn locally and view the changes Live.
```bash
yarn start
```

## NPM commands
To build locally
```bash
npm run build
```
To test your build locally.
```bash
npm run serve
```

## Yarn command to build and deploy straight to Github pages
```bash
USE_SSH=true yarn deploy
```
You can also use the following command.
```bash
GIT_USER=<your_Github_Username> yarn deploy
```