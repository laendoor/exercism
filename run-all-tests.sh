#!/usr/bin/env bash

pushd () {
  command pushd "$@" > /dev/null || return
}

popd() {
  command popd > /dev/null || return
}

function batsTest() {
  for file in *.sh; do
    if grep -q test "$file"; then
      bats "$file" || return 1
    fi
  done
}

function tests() {
  local DIR_LANG=$1
  local TEST_COMMAND=$2
  pushd "$DIR_LANG" || return
  for DIR_EXERCISE in */; do
    pushd "$DIR_EXERCISE" || return
    echo "Testing $DIR_LANG/$DIR_EXERCISE"
    eval "$TEST_COMMAND" &> /dev/null || { echo "Failed '$TEST_COMMAND' in $DIR_LANG/$DIR_EXERCISE"; exit 1; }
    popd || return
  done
  popd || return
}

tests bash batsTest
tests javascript "npm test"
tests typescript "yarn test"
