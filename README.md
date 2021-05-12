# key value store
application to store values by keys.

## Project setup
- Copy `example.env` to `.env`. (`cp example.env .env`)
- modify env to your settings, make sure the `DATABASE_URL` is set to the mongodb port in `docker-compose.yml`.
- start mongodb with docker `docker-compose up -d`.
- use `npm run serve` to start the application.
