FROM golang:1.20-alpine as builder
WORKDIR /app
COPY . .

RUN go build -o myapp

FROM scratch
COPY --from=builder /app/myapp .
CMD [ "./myapp" ]