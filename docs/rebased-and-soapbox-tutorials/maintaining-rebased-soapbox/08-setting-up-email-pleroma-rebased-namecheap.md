---
sidebar_position: 8
slug: setting-up-email-pleroma-rebased-namecheap
title: Setting up the mailer in AdminFe
---
# Setting up mailer in AdminFE

Use the mailer to send notification to users, such as when they forget their password and want to reset it. You can also use it send digest emails to new users.
    
:::note
- This procedure assumes you have set up your email in Namecheap. Their support team can guide you with the steps and links to set it up.
- You can use the same steps in Pleroma's AdminFE.
:::
1. Log on to AdminFE and click **Mailer** on the left sidebar of AdminFE. The direct link is `yourinstance.tld/pleroma/admin/#/settings/mailer`.
2. In the **Pleroma.Emails.Mailer** area, do the following. 

| Field         | Description                                                                  |
|---------------|------------------------------------------------------------------------------|
| Mailer Enable | Enable this option.                                                          |
| Adapter       | Select SMTP.                                                                 |
| Relay         | Enter the Namecheap relay. This is `mail.privateemail.com`.   |
| Port          | Enter 587.                                                                   |
| Username      | Enter the email address you set up in name cheap. E.g. `hello@myinstance.tld.` |
| Password      | Enter the password for the email address you have set up in Namecheap.                             |
| Use SSL       | Leave this disabled.                                                         |
| STARTTLS Mode | Select `:if_available`.                                                        |
| AUTH Mode     | Select `:always`.                                                               |
| Retries       | Enter 2.                                                                     |