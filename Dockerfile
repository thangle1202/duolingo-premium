FROM nginx:1.27-alpine

# Copy static site files into Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 for Railway
EXPOSE 80
