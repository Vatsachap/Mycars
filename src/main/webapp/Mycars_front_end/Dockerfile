# 1. Build stage: use Node to build the Vite React app
FROM node:20 AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy dependency files first to leverage Docker cache
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the source code
COPY . .

# 6. Build the Vite app
RUN npm run build

# 7. Production stage: serve using Nginx
FROM nginx:alpine

# 8. Copy the built assets to Nginx’s public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Add custom nginx config (only needed if using React Router)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 9. Expose port 80
EXPOSE 80

# 10. Start Nginx
CMD ["nginx", "-g", "daemon off;"]
