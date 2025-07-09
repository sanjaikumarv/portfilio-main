# Use Node.js 20 alpine image as builder
FROM node:20.15.0-alpine AS builder

# Set up working directory
RUN mkdir /app
WORKDIR /app

# Upgrade and install git
RUN apk --no-cache add git

# Copy essential files
COPY package*.json tsconfig.json ./
COPY . .

# Install dependencies and build
RUN npm install
ENV NODE_ENV=production
RUN npm run build

# Expose port for health check with fly.io
EXPOSE 3000/tcp

# Start the application
CMD ["npm", "run", "dev"]
