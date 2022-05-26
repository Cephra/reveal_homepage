#!/usr/bin/env bash

yarn install
yarn build
sudo rm -rf /srv/http/0x29a.me
sudo mv dist /srv/http/0x29a.me
