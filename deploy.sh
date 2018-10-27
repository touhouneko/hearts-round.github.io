#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git add -f dist
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin https://${GIT_TOKEN}@github.com/hearts-round/hearts-round.github.io.git
  git push --quiet --set-upstream origin master
}

setup_git
commit_website_files
upload_files