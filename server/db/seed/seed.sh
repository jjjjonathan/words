#!/bin/bash

echo "Running seed script..."
echo "Creating database and tables..."

# Run SQL file in psql

psql postgres < db/seed/schema.sql

echo "Database and tables created!"
echo "Generating fake data..."

ts-node db/seed/seed.ts

echo "All done!"