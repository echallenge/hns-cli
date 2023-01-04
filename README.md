# HNS CLI

REST/CLI and RPC clients for handshake.

## Install


### Import GPG Key

```bash
sudo gpg --homedir /tmp --no-default-keyring --keyring /usr/share/keyrings/pcfreak30.gpg  --keyserver keyserver.ubuntu.com --recv-keys C997C339BE476FF2
```

### Add Repo
```
echo "deb [signed-by=/usr/share/keyrings/pcfreak30.gpg] https://pcfreak30.github.io/hns-cli/ focal main" | sudo tee -a /etc/apt/sources.list.d/pcfreak30.list
sudo apt-get update
```

### Install Package

```
sudo apt-get install hns-cli
```

## Usage

Programs available:

* hsd-cli
* hsd-rpc
* hsw-cli
* hsw-rpc

CLI/API Docs: https://hsd-dev.org/api-docs/

## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your code
to be distributed under the MIT license. You are also implicitly verifying that
all code is your original work. `</legalese>`

## License

- Copyright (c) 2017, Christopher Jeffrey (MIT License).
- Copyright (c) 2023, Derrick Hammer (MIT License).

See LICENSE for more info.
