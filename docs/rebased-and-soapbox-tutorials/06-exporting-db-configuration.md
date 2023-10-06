---
slug: exporting-database-configuration-rebased
sidebar_position: 6
title: Exporting the Rebased database configuration
---

# Exporting the database configuration

Run the following commands in succession to export the database configuration of your Rebased or Pleroma installation.

```bash
sudo -Hu pleroma bash
```
```bash
cd /opt/pleroma
```
```bash
mix pleroma.config migrate_from_db --env=prod -d --path=/opt/pleroma/config/export_prod.secret.exs
MIX_ENV=prod mix pleroma.config migrate_from_db
```
Once you run the above commands, a file is exported to the `config/prod.exported_from_db.secret.exs` path on your server. This is your database configuration. Use a program like Notepad ++ to open the file.

:::caution

If you plan to share the database configuration file in public, such as online forums, ensure you have removed all the keys, such as AWS Secret access keys, Key IDs etc

:::

