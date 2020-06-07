FROM node:10-alpine

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files from host computer to the container
COPY . .

# Build the app
# RUN npm run build

# Specify port app runs on
EXPOSE 8080

# Run the app
CMD [ "node", "app.js" ]
