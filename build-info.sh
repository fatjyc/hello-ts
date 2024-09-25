#!/usr/bin/env bash

echo "Generating build info..."

APP_NAME="babel-vectorstore"
COMMIT_ID=$(git describe --match=NeVeRmAtCh --always --abbrev=7 --dirty)
BUILD_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo "{
  \"name\": \"$APP_NAME\",
  \"commitId\": \"$COMMIT_ID\",
  \"time\": \"$BUILD_TIME\"
}" > info.json