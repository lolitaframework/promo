#!/bin/bash

eval "$(ssh-agent -s)"
chmod 600 .travis/deploy
ssh-add .travis/deploy

# pass host authenticity check
echo -e "Host $IP\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-keyscan $IP >> ~/.ssh/known_hosts

# push changes to the deployment environment
git config --global push.default matching
git remote add deploy ssh://deploy@$IP$DEPLOY_DIR
git push deploy dev

# build frontend after deploying
ssh deploy@$IP <<EOF
  cd $DEPLOY_DIR
  git clean -xdf && git reset --hard && git pull origin master
  npm install
  npm rebuild node-sass
  npm run build
EOF