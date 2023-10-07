---
sidebar_position: 4
slug: updating-rebased
title: Updating Rebased
---

# Updating Rebased

To update Rebased, run the following commands in succession.

1. Change to the `pleroma` user.
    ```bash
    sudo -Hu pleroma bash
    ```

2. Change your working directory to `/opt/pleroma`.
    ```bash
    cd /opt/pleroma
    ```

3. Pull the latest build.
    ```bash
    git pull origin develop
    ```

4. Install `asdf`.
    ```bash
    asdf install
    ```

5. Perform the task of migration.
    ```bash
    mix deps.get
    MIX_ENV=prod mix ecto.migrate
    ```

6. Exit as the `pleroma` user.
    ```bash
    exit
    ```

7. Restart pleroma.
    ```bash
    systemctl restart pleroma
    ```