#!/usr/bin/env bash

function testNPM() {
  for dir in */; do
    pushd $dir
    npm test
    popd
  done
}

function testYARN() {
  for dir in */; do
    pushd $dir
    yarn test
    popd
  done
}

function testBATS() {
  for dir in */; do
    pushd $dir
    for file in *.sh; do
      if grep -q test $file; then
        bats $file
      fi
    done
    popd
  done
}

pushd bash
testBATS
popd

pushd javascript
testNPM
popd

pushd typescript
testYARN
popd

