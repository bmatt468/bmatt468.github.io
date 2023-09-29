#!/usr/bin/env bash

# Remove any existing .env file
rm .env

# Create the new .env file
touch .env

# Add the currently deployed git hash to the .env file
GIT_HASH_ENV_PREFIX="VITE_CURRENT_COMMIT"
GIT_HASH=$(git rev-parse HEAD)
echo "$GIT_HASH_ENV_PREFIX=$GIT_HASH" >> .env

# Add the current time of deployment to the .env file
DEPLOYMENT_TIME_ENV_PREFIX="VITE_LAST_DEPLOYMENT"
DEPLOYMENT_TIME=$(date +%s)
echo "$DEPLOYMENT_TIME_ENV_PREFIX=$DEPLOYMENT_TIME" >> .env
