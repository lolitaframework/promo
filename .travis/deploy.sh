#!/bin/bash

eval "$(ssh-agent -s)"
chmod 600 .travis/deploy # Allow read access to the private key HELLLLLL222
ssh-add .travis/deploy # Add the private key to SSH

# pass host authenticity check
echo -e "Host $IP\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-keyscan $IP >> ~/.ssh/known_hosts

# build frontend after deploying
ssh deploy@$IP <<EOF
  cd $DEPLOY_DIR
  echo "Hello1"
  git pull origin master
  echo "Hello2"
  npm install
  npm run build
EOF