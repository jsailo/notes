---
sidebar_position: 5
slug: updating-soapbox
title: Updating Soapbox
---

Updating Soapbox involves fetching the latest build as a zip file and then unzipping it.

1. Fetch the latest build.
    ```bash
    curl -O https://dl.soapbox.pub/main/soapbox.zip
    ```
2. Unzip the files.
    ```bash
    busybox unzip soapbox.zip -o -d /opt/pleroma/instance/static
    ```
3. Refresh your website.