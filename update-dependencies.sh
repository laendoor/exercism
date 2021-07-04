#!/usr/bin/env bash

function updateJS() {
  PKG=$1
  for dir in */
  do
    pushd $dir
    ncu -u
    $PKG install
    popd
  done
}

pushd javascript
updateJS npm
popd

pushd typescript
updateJS yarn
popd

