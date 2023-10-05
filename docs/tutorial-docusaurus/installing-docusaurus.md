---
sidebar_position: 1
slug: cloning-docusaurus-from-github
title: Installing Docusaurus 
---

Installing Docusaurus involves:
1. Creating your Github repository.
2. Cloning your created Github repository to your local computer.
3. Running the npx command to create the Docusaurus files. We will use the classic template for this tutorial.
4. Making changes to the default files and pushing them to your Github repository.


## Creating your Github repository

1. Create a new repository in Github.

## Cloning the created repository to your local computer

2. Use the following command to clone (or create copies) of your Github repository on your local computer.
    
    ```bash
    git clone git@github.com:<YourGithubUsername/your_repository_name.git
    ```

## Creating the Docusaurus files on your local computer

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

