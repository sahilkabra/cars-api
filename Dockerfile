FROM node:9

ENV PORT 9001

EXPOSE 9001

WORKDIR /src

COPY . .
RUN npm install

RUN npm run build

CMD ["node", "dist/"]
