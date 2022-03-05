#!/bin/bash

echo "Seeding for testing..."
echo "Running seed script..."
echo "Creating database and tables..."

# Run SQL files in psql

psql postgres -v dbname="words_test" -f db/seed/schema.sql

echo "Database and tables created!"
echo "Generating fake data..."

NODE_ENV=test ts-node db/seed/test-seed.ts

echo "All done!"