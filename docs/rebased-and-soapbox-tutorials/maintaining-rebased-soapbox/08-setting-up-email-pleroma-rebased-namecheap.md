---
sidebar_position: 8
slug: setting-up-email-pleroma-rebased-namecheap
title: Setting up the mailer (or email) in AdminFe
---
# Setting up mailer

Use the mailer to send notification to users, such as when they forget or want to reset their password. You can also use it send digest emails to new users.

Click Mailer on the left sidebar of AdminFE. The direct link is [yourinstance.tld]/pleroma/admin/#/settings/mailer
Do the following. 

| Field         | Value to select or enter                                                     |   |   |   |   |   |   |   |   |
|---------------|------------------------------------------------------------------------------|---|---|---|---|---|---|---|---|
| Adapter       | SMTP                                                                         |   |   |   |   |   |   |   |   |
| Relay         | Enter the Namecheap relay. This is mail.privateemail.com by default          |   |   |   |   |   |   |   |   |
| Port          | Enter 587.                                                                   |   |   |   |   |   |   |   |   |
| Username      | Enter the email address you set up in name cheap. E.g. hello@myinstance.tld. |   |   |   |   |   |   |   |   |
| Password      | Enter the password for the Username field above.                             |   |   |   |   |   |   |   |   |
| Use SSL       | Leave this disabled.                                                         |   |   |   |   |   |   |   |   |
| STARTTLS Mode | Select :if_available.                                                        |   |   |   |   |   |   |   |   |
| AUTH Mode     | Select :always                                                               |   |   |   |   |   |   |   |   |
| Retries       | Enter 2.                                                                     |   |   |   |   |   |   |   |   |

