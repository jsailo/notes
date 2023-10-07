---
sidebar_position: 2
slug: installing-rebased
title: Installing Rebased
---

1. Run the following commands to update and ugrade your fresh Ubuntu machine.

    ```bash
    apt update -y
    apt upgrade -y


:::note
The `y` flag is similar to your Windows `Yes to all` button.
:::

2. Install system dependencies. These are needed to for your Rebased installation to function properly.
    ```bash
    apt install git curl build-essential postgresql postgresql-contrib cmake libmagic-dev imagemagick ffmpeg libimage-exiftool-perl nginx certbot unzip libssl-dev automake autoconf libncurses5-dev fasttext
    ```

3. Create the Pleroma user. Here, you are creating a new user called `Pleroma` in the Ubuntu machine. This is the user with which you will interact with your Rebased installation.
    ```bash
    useradd -r -s /bin/false -m -d /var/lib/pleroma -U pleroma
    ```

4. Download the Rebased source code.
    ```bash
    git clone -b develop https://gitlab.com/soapbox-pub/rebased /opt/pleroma
    ```

5. Change ownership to the Pleroma user.
    ```bash
    chown -R pleroma:pleroma /opt/pleroma
    ```

6. Enter the source code directory and make yourself the Pleroma user.
    ```bash
    cd /opt/pleroma
    sudo -Hu pleroma bash
    ```

7. Rebased uses the Elixir programming language (based on Erlang). It’s important we use a specific version of Erlang (24), so we’ll use the `asdf` version manager to install it. Yes, that's `asdf`.
    ```bash
    git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.10.0
    echo ". $HOME/.asdf/asdf.sh" >> ~/.bashrc
    echo ". $HOME/.asdf/completions/asdf.bash" >> ~/.bashrc
    exec bash
    asdf plugin-add erlang
    asdf plugin-add elixir
    ```

8. Almost there. Install Erlang/Elixir.
    ```bash
    asdf install 
    ```

9. Compile Rebased.
    ```bash
    mix local.hex --force
    mix local.rebar --force
    ```

10. Fetch Elixir dependencies.
    ```bash
    mix deps.get
    ```

11. Finally, compile Soapbox.
    ```bash
    MIX_ENV=prod mix compile
    ```
    :::tip
        This will take a good 10 minutes 🕙. Go grab and make a Maggi or some noodles 🍜
    :::

12. Generate the configuration. 
    ```bash 
    MIX_ENV=prod mix pleroma.instance gen
    ```

13. Rename the generated `generated_config.exs` file to `prod.secret.exs` so it gets loaded at runtime
    ```bash 
    mv config/generated_config.exs config/prod.secret.exs
    ```

14. Provision the database. The previous section also created a file called `config/setup_db.psql`, which you can use to create the database. Now exit and get back to being the root user (for the remainder of this document). 
    ```bash 
    exit
    ```

15. Execute the SQL file as the postgres user:
    ```bash 
    sudo -Hu postgres psql -f config/setup_db.psql
    ```

16. Now run the database migration as the pleroma user:
    ```bash 
    sudo -Hu pleroma bash -i -c 'MIX_ENV=prod mix ecto.migrate'
    ```

17. Copy the generated `pleroma.service` file to the `systemd` directory.
    ```bash 
    cp /opt/pleroma/installation/pleroma.service /etc/systemd/system/pleroma.service
    ```

18. Enable the Pleroma service.
    ```bash 
    systemctl enable --now pleroma.service
    ```
