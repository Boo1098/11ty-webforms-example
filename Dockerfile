# Use the latest node image
FROM node:latest
# Set active directory
WORKDIR /app
# Copy package list
COPY package.json ./
# Install node packages
RUN npm install
# Copy in full development directory
COPY . .
# Build website
RUN npm run build
# Command to run on container start
CMD ["node", "server.js"]
