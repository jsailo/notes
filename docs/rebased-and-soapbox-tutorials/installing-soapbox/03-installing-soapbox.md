---
sidebar_position: 3
slug: installing-soapbox
title: Installing Soapbox
---

Soapbox is the frontend with which users (or you) will interact with your Fediverse site. It involves fetching the zip file from the Soapbox server and unzipping the files on your server. That's all there is to it.

1. Use the `curl` command to fetch the latest build.

    ```bash
    curl -O https://dl.soapbox.pub/main/soapbox.zip
    ```


2. Unzip the files using the `unzip` command.

    ```bash
    busybox unzip soapbox.zip -o -d /opt/pleroma/instance/static
    ```

Refresh your website. Tada!