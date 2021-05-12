# key value store
application to store values by keys.

## Project setup
- Copy `example.env` to `.env`. (`cp example.env .env`)
- modify env to your settings, make sure the `DATABASE_URL` is set to the mongodb port in `docker-compose.yml`.
- start mongodb with docker `docker-compose up -d`.
- use `npm run serve` to start the application.

## todo

 - [x] KVS-1: create project setup.
   - setup node express server.
   - setup websockets with socket.io.
   - add typescript. (this is not implemented)
   - add unit testing. (this is not implemented)
   - document setup.
 - [ ] KVS-2: create websockets to add key value pairs.
   - create unit tests to check connection and expected results from returning messages.
   - create websocket to create a pair with key and value.
   - create a function in the Pair model to use in the websocket to create a database object.
   - create validation to check if key and value are send and if not send validation message.
   - add html page to use the websocket.
 - [ ] KVS-3: create endpoint to get key value pairs.
   - create unit tests to check expected results.
   - create endpoint to return key with value pair, using `/pairs/:key`.
