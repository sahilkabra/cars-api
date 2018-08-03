FROM node:9

ENV PORT 9001

EXPOSE 9001

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/"]
