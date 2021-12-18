#!/usr/bin/env bash

apply-command () {
  echo "$1"
  eval "$1"
}

pushd() {
  command pushd "$@" > /dev/null || return
}

popd() {
  command popd > /dev/null || return
}

clearDependencies() {
  local DIR_LANG=$1
  local PKG=$2
  pushd "$DIR_LANG" || return
  for DIR_EXERCISE in */
  do
    pushd "$DIR_EXERCISE" || return
    echo "Clearing $DIR_LANG/$DIR_EXERCISE"
    rm -rf node_modules/ &> /dev/null
    popd || return
  done
  popd || return
}

updateDependencies() {
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

batsTest() {
  for file in *.sh; do
    if grep -q test "$file"; then
      bats "$file" || return 1
    fi
  done
}

tests() {
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

# start

echo "What's up?"
echo " 1) Run tests"
echo " 2) Update dependencies"
echo " 3) Clear dependencies"
read -rp "Opción: " NUMBER

case "$NUMBER" in
  1) tests bash batsTest
     tests javascript "npm test"
     tests typescript "yarn test"
     ;;  

  2) updateDependencies javascript npm
     updateDependencies typescript yarn
     ;;

  3) clearDependencies javascript npm
     clearDependencies typescript yarn
     ;;
  
  *) echo "Invalid option"
     ;;
esac