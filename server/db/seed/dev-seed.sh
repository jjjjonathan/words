#!/bin/bash

echo "Seeding for development..."
echo "Running seed script..."
echo "Creating database and tables..."

# Run SQL files in psql

psql postgres -v dbname="words_dev" -f db/seed/schema.sql

echo "Database and tables created!"
echo "Generating fake data..."

NODE_ENV=development ts-node db/seed/dev-seed.ts

echo "All done!"