---
sidebar_position: 3
slug: pushing-your-docusaurus-file-changes-to-github
title: Pushing your docusaurus file changes to Github
---

## Pushing your changes to Github

1. Change the directory on your local computer.

    ```bash
    cd <location of your local repository>
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

    We use the git add . command here for the sake of simplicity.
    Here we are saying, "I want to add all the files in the directory
    to github.

:::

4. Commit the files. Here, you are saying "I'm ready to commit the changes I have made".
    ```bash
    git commit -m "First commit"
    ```
5. Run the following to ensure that you will be pushing the files to the `main` branch on your Github repository
    ```bash
    git branch -M main
    ```

6. Now add the files and push the files to Github.

    ```bash
    git remote add origin git@github.com:<your_github_username>/notes.git
    git push
    ```