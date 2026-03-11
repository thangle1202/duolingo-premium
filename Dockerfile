FROM nginx:1.27-alpine

# Use envsubst-based templating for nginx config
ENV NGINX_ENVSUBST_TEMPLATE_DIR=/etc/nginx/templates \
    NGINX_ENVSUBST_OUTPUT_DIR=/etc/nginx/conf.d

# Copy nginx template and static site files
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY . /usr/share/nginx/html

# Expose default HTTP port (Railway will route to $PORT)
EXPOSE 80
