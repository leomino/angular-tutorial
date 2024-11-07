# Step 1: Use Node image to build Angular app
FROM node:20.11.1 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the Angular app source code and build it
COPY . .
RUN npm run build

# Step 2: Use Nginx to serve the Angular app
FROM nginx:alpine

# Copy the Angular build output to the Nginx html folder
COPY --from=build /app/dist/first-app/browser /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to allow access to the container
EXPOSE $PORT

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
