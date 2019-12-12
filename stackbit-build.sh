#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST https://api.stackbit.com/project/5df1d3c78c646b0014c608cf/webhook/build/pull > /dev/null
npx @stackbit/stackbit-pull --stackbit-pull-api-url=https://api.stackbit.com/pull/5df1d3c78c646b0014c608cf
curl -s -X POST https://api.stackbit.com/project/5df1d3c78c646b0014c608cf/webhook/build/ssgbuild > /dev/null
jekyll build
wait

curl -s -X POST https://api.stackbit.com/project/5df1d3c78c646b0014c608cf/webhook/build/publish > /dev/null
echo "Stackbit-build.sh finished build"
