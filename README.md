# cars-api
A simple api to store/retrieve cars.

## Getting started
### Development
#### System Requirements
1. node v9
1. npm v6
1. docker: needed to create docker image
1. docker-compose: needed to create and run docker images

#### Commands
1. `npm install` to install dependencies.
1. `npm run start` to start a local dev server.
1. `npm run docker` uses docker-compose to create a docker image for the app and for mongo db.
    1. Please correct the volume mount points before using this command.
1. `npm run docker:stop` to stop the server and remove containers.
1. `npm run test` to run unit tests.

The server currently runs on port 9001

#### API
The server supports the following endpoints:
1. `GET /cars` - fetch all cars from the database.
1. `POST /cars` - with a Car object or a list of Car objects to create new cars.
1. `GET /cars?<filters>`
    1. filter cars by make, model, colour.
    1. To filter for cars of many colours use `/cars?colour=RED&colour=BLACK`. Similarly for other attributes as well.
1. `GET /cars/car_id` - fetch car with id.
