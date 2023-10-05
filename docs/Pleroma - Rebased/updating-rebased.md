---
sidebar_position: 3
---

# Updating Rebased

To update Rebased, run the following commands in succession.

```bash
sudo -Hu pleroma bash
```
```bash
cd /opt/pleroma
```
```bash
git pull && mix deps.get && mix deps.compile && MIX_ENV=prod mix compile && MIX_ENV=prod mix ecto.migrate
```

