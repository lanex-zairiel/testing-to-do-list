#!/usr/bin/env bash

# Get environment variables
source .env

# Run postgres
docker run -d -p 5432:5432 \
    --name todo-postgres \
    -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
    -e POSTGRES_USER=$POSTGRES_USER \
    -e POSTGRES_DB=$POSTGRES_DB \
    postgres:11