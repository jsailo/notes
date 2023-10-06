---
sidebar_position: 3
slug: pushing-your-docusaurus-file-changes-to-github
title: Pushing your docusaurus file changes to Github
---

## Pushing your changes to Github

1. Change the directory on your local computer.

    ```bash
    cd <location of your local Docusaurus repository>
    ```

2. Initialize your git repository on the folder

    ```bash
    git init
    ```

3. Add your files to repository.

    ```bash    
    git add .
    ```

    :::note

        We use the git add . (add dot) command here for the sake of simplicity. We are saying, "I want to add all the files in the directory to github."
    :::

4. Commit the files to Github. Here, we are saying "I'm ready to commit the changes I have made."

    "First commit" is the comment you are adding to the commit you are making. This is for you or others watching your repository to see what changes were made to the commit.

    ```bash
    git commit -m "First commit"
    
:::tip
Run the following to ensure that you will be pushing the files to the `main` branch of your Github repository

   ```bash
    git branch -M main
::: 

6. Now add the files and push the files to Github.

    ```bash
    git remote add origin git@github.com:<your_github_username>/notes.git
    git push
    ```