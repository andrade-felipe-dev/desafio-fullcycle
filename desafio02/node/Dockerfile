FROM node:20-alpine3.17 as BUILDER
WORKDIR /usr/src/app
COPY ./package*.json .
RUN npm install
COPY . .

# RUN apk add --no-cache openssl

# ENV DOCKERIZE_VERSION v0.7.0
# RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
#     && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

FROM node:20-alpine3.17
COPY --from=builder /usr/src/app .
EXPOSE 3000
CMD [ "node", "index.js" ]