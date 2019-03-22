#!/usr/bin/env bash
echo "Cleaning up..."

./scripts/destroy-hasura.sh
./scripts/destroy-todo-postgres.sh

echo "Done cleaning."