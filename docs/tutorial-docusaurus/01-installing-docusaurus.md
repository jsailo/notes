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

