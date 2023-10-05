---
sidebar_position: 5
slug: viewing-rebased-logs
title: Viewing Rebased logs
---

# Viewing system logs

System logs allow you to view the logs of your Rebased server and are useful when you want to troubleshoot issues your server is facing.

To view system logs on the server, run the following: 

```bash
journalctl -fu pleroma
```
The following is an example output. 

```bash
Oct 04 03:57:19 servername mix[3807027]: 03:57:19.149 [info] GET /packs/emoji/2694.svg
Oct 04 03:57:19 servername mix[3807027]: 03:57:19.149 [info] GET /packs/emoji/1f602.svg
Oct 04 03:57:19 servername mix[3807027]: 03:57:19.156 [info] GET /packs/emoji/2694.svg
Oct 04 03:57:19 servername mix[3807027]: 03:57:19.158 [info] Sent 200 in 8ms
Oct 04 03:57:19 servername mix[3807027]: 03:57:19.159 [info] Sent 304 in 9ms
Oct 04 03:57:19 servername mix[3807027]: 03:57:19.168 [info] Sent 200 in 11ms
Oct 04 03:57:19 servername mix[3807027]: 03:57:19.249 [info] GET /packs/emoji/1f602.svg
Oct 04 03:57:19 servername mix[3807027]: 03:57:19.250 [info] Sent 304 in 1ms
Oct 04 03:58:10 servername mix[3807027]: 03:58:10.464 [info] GET /api/v2/search
Oct 04 03:58:10 servername mix[3807027]: 03:58:10.826 [error] Error while fetching https://someserver.com/activities/like/19d7575e-e184-4ef0-98bd-1ebe60108703: {:error, {:transmogrifier, :error}}
Oct 04 03:58:10 servername mix[3807027]: 03:58:10.834 [error] Error while fetching https://someserver.com/activities/like/85968c3b-ac54-4618-af59-3247bdfb7da1: {:error, {:transmogrifier, :error}}
Oct 04 03:58:10 servername mix[3807027]: 03:58:10.906 [error] Error while fetching https://someserver.com/activities/like/69d615c2-ef6e-4ee6-a072-071aba902526: {:error, {:transmogrifier, :error}}
Oct 04 03:58:11 servername mix[3807027]: 03:58:11.841 [error] Error while fetching https://someserver.com/activities/like/75eecc2d-9caf-456d-bd43-eb9afc09c0d4: {:error, {:transmogrifier, :error}}
Oct 04 03:58:12 servername mix[3807027]: 03:58:12.728 [error] Error while fetching https://someserver.com/activities/like/c4f5c590-1e20-4953-b10f-62f8afd8c4d6: {:error, {:transmogrifier, :error}}
Oct 04 03:58:13 servername mix[3807027]: 03:58:13.166 request_id=F4rLb78MesI_wNwAXTwC [info] Sent 200 in 2701ms
Oct 04 03:58:13 servername mix[3807027]: 03:58:13.256 [info] GET /api/v2/search
Oct 04 03:58:13 servername mix[3807027]: 03:58:13.582 request_id=F4rLcGV_je55obkAXTwi [info] Sent 200 in 326ms
Oct 04 03:58:13 servername mix[3807027]: 03:58:13.665 [info] GET /api/v2/search
```