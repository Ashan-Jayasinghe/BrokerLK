# Use an official Node.js runtime as a base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --ignore-scripts

# Copy the entire application code to the working directory
COPY . .

# Expose the port that the Express server will run on
EXPOSE 8800

# Specify the command to run your backend application
CMD ["npm", "start"]