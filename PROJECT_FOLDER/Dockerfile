# Use Node.js LTS version
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .
# Compile TypeScript to JavaScript
RUN npm run build

# Expose port (match your Express server port)
EXPOSE 3000

# Start app
CMD ["npm", "start"]
