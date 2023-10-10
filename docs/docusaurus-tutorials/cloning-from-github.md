---
sidebar_position: 1
slug: cloning-docusaurus-from-github
---

# Cloning from Github and running locally

Clone Docusaurus from Github and run it on your local computer.

1. Create a new repository in Github.
2. Copy the repository link.
3. Clone the repository on your local computer. 
    ```bash
    git clone git@github.com:<YourGithubUsername>/<YourRepositoryName>.git
4. Change the directory to your repository. 
    ```bash
    cd <Your_Repository_Directory>
3. Run the following in your shell.
    ```bash
    npx create-docusaurus@latest notes classic
    ```
4. If all goes well, you'll see the following message.

    ```Notes
    Happy building awesome websites!
    ```
5. Change to the docusaurus directory.
6. Run the following. 
    ```bash
    yarn start
    ```
    You Docusaurus site is loaded at `http://localhost:3000/<name_of_local_docusaurus_directory>`