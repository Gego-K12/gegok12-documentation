#!/bin/bash

# Start the app with PM2
pm2 start "npm run start" --name docs-gegok12

# Save the PM2 process list for auto startup on reboot
pm2 save

# (Optional) Set PM2 to launch on system startup
# You can uncomment the line below based on your OS
# pm2 startup

echo "App started with PM2 as 'docs-gegok12'"
