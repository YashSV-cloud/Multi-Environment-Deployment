FROM node:18

WORKDIR /app

COPY backend/ ./backend
COPY frontend/ ./frontend

RUN npm init -y && npm install express

CMD ["node", "backend/server.js"]