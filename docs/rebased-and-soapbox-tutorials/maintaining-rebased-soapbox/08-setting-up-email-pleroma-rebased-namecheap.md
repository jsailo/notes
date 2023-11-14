---
sidebar_position: 8
slug: setting-up-email-pleroma-rebased-namecheap
title: Setting up the mailer in AdminFe
---
# Setting up mailer in AdminFE

Use the mailer to send notification to users, such as when they forget or want to reset their password. You can also use it send digest emails to new users.
    :::note
    You can use the same steps in Pleroma AdminFE.
    :::

1. Log on to AdminFE and click **Mailer** on the left sidebar of AdminFE. The direct link is `yourinstance.tld/pleroma/admin/#/settings/mailer``
2. In the Pleroma.Emails.Mailer/Mailer-related settings, do the following. 

| Field         | Description                                                                  |
|---------------|------------------------------------------------------------------------------|
| Mailer Enable | Enable this option.                                                          |
| Adapter       | Select SMTP.                                                                 |
| Relay         | Enter the Namecheap relay. This is 'mail.privateemail.com' (without quotes).   |
| Port          | Enter 587.                                                                   |
| Username      | Enter the email address you set up in name cheap. E.g. hello@myinstance.tld. |
| Password      | Enter the password for the Username field above.                             |
| Use SSL       | Leave this disabled.                                                         |
| STARTTLS Mode | Select :if_available.                                                        |
| AUTH Mode     | Select :always                                                               |
| Retries       | Enter 2.                                                                     |