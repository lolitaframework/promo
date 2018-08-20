#!/bin/bash

eval "$(ssh-agent -s)"
chmod 600 .travis/deploy-key # Allow read access to the private key HELLLLLL222
ssh-add .travis/deploy-key # Add the private key to SSH

# pass host authenticity check
echo -e "Host $IP\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-keyscan $IP >> ~/.ssh/known_hosts

# build frontend after deploying
ssh deploy@$IP <<EOF
  cd $DEPLOY_DIR
  git pull origin master
  npm install
  npm run build
EOF