---
sidebar_position: 1
slug: installing-docusaurus
title: Installing Docusaurus 
---

Installing Docusaurus involves:
1. Creating your Github repository.
2. Cloning your created Github repository to your local computer.
3. Creating the Docusaurus files on your local computer using the npx command.


## Creating your Github repository

1. Create a new repository in Github.

## Cloning the created repository to your local computer

2. Use the following command to clone (or create copies) of your Github repository on your local computer.
    
    ```bash
    git clone git@github.com:<YourGithubUsername/your_repository_name.git
    ```

## Creating the Docusaurus files on your local computer using the npx command

:::note

    We will use the classic template for this tutorial and use the npx 
    command to fetch the Docusaurus files.

:::


1. Run the following command.

    ```bash
    npx create-docusaurus@latest my-website classic
    ```

2. If all goes well, you'll see the following message.

    ```bash
    Happy building awesome websites!
    ```

Ignore the following warnings. 

```bash
warning @docusaurus/core > react-dev-utils > fork-ts-checker-webpack-plugin > memfs@3.6.0: this will be v4
warning @docusaurus/core > webpack-dev-server > webpack-dev-middleware > memfs@3.6.0: this will be v4
warning @docusaurus/core > @docusaurus/mdx-loader > @mdx-js/mdx > remark-mdx > @babel/plugin-proposal-object-rest-spread@7.12.1: This proposal has been merged to the ECMAScript standard and thus this plugin is no longer maintained. Please use @babel/plugin-transform-object-rest-spread instead.
warning @docusaurus/core > @docusaurus/mdx-loader > @mdx-js/mdx > remark-parse > trim@0.0.1: Use String.prototype.trim() instead
warning @docusaurus/core > @svgr/webpack > @svgr/plugin-svgo > svgo > stable@0.1.8: Modern JS already guarantees Array#sort() is a stable sort, so this library is deprecated. See the compatibility table on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility
```