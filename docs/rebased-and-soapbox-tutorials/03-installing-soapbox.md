---
sidebar_position: 3
slug: installing-soapbox
title: Installing Soapbox
---

Soapbox is the recommended frontend for Rebased.

1. Use the `curl` command to fetch the latest build.

    ```bash
    curl -O https://dl.soapbox.pub/main/soapbox.zip
    ```


2. Unzip the files using the `unzip` command.

    ```bash
    busybox unzip soapbox.zip -o -d /opt/pleroma/instance/static
    ```


Refresh your website. That’s it!