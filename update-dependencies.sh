#!/usr/bin/env bash

pushd () {
  command pushd "$@" > /dev/null || return
}

popd() {
  command popd > /dev/null || return
}

function updatePackages() {
  local DIR_LANG=$1
  local PKG=$2
  pushd "$DIR_LANG" || return
  for DIR_EXERCISE in */
  do
    pushd "$DIR_EXERCISE" || return
    echo "Updating $DIR_LANG/$DIR_EXERCISE"
    { ncu -u; $PKG install; } &> /dev/null
    popd || return
  done
  popd || return
}

updatePackages javascript npm
updatePackages typescript yarn
