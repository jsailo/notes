---
slug: exporting-database-configuration-rebased
sidebar_position: 6
title: Exporting the Rebased database configuration
---

# Exporting the Rebased database configuration

Export the database configuration into a readable file for the purposes of troubleshooting or view the entries.

To export the database configuratin, run the following commands in succession.

1. Change to the `pleroma` user.
    ```bash
    sudo -Hu pleroma bash
    ```

2. Change the directory to `/opt/pleroma`
```bash
cd /opt/pleroma
```

3. Run the mix command.

    ```bash
    mix pleroma.config migrate_from_db --env=prod -d --path=/opt/pleroma/config/export_prod.secret.exs
    MIX_ENV=prod mix pleroma.config migrate_from_db
    ```

A file is exported to the `config/prod.exported_from_db.secret.exs` path on your server. This is your database configuration file. Use a program like Notepad ++ to open the file.

:::caution

If you plan to share the database configuration file in public, such as online forums or chat rooms, REMOVE ALL the keys, such as AWS Secret access keys, Key IDs etc

:::

