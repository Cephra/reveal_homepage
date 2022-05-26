#!/usr/bin/env bash

rm -rf /srv/http/0x29a.me/*
yarn build
mv dist/* /srv/http/0x29a.me/
