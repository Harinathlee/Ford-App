# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the build artifacts from the dist folder to the Nginx HTML directory
COPY dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
