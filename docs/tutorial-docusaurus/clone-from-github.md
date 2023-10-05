---
sidebar_position: 1
slug: cloning-docusaurus-from-github
---

# Cloning from github

Clone from github, modify the files, and push your changes.

## Steps
---
1. Create a new repository in Github
2. Clone the repository link.

```bash

git clone git@github.com:<yourgithubusername/yourreponame.git

```

3. Run the following in your shell.

    ```bash
    npx create-docusaurus@latest notes classic
    ```
4. If all goes well, you'll see the following message.

    ```Notes
    Happy building awesome websites!
    ```
5. Change to the docusaurus directory.

5. Initialize your git on the folder

    ```bash
    git init
    git add
    git commit -m "First commit"
    git branch -M main
    git remote add origin git@github.com:<your_github_username>/notes.git
    git push
    ```
