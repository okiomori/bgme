FROM node:22-alpine
LABEL Name=bgme Version=0.0.1

WORKDIR /app

COPY index.html styles.css server.cjs ./
COPY src/ ./src/
COPY art/ ./art/

EXPOSE 4175

CMD ["node", "server.cjs"]
