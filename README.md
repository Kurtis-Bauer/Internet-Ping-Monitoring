# Internet Ping Monitoring

Ping monitoring using bash script to get latency data, node.js to communicate with mongodb in a docker container

### Setup

1. Execute this to start mongodb docker container on localhost:27017 `$ docker run --rm -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo`

2. Open mongo compass and connect to db:

```
Hostname:localhost
```
Port:27017
```
Authentication:Username/Password
```
Username:admin
```
Password:admin
```
Authentication Database:admin

3. Go to directory in terminal and execute `$ node app.js`

4. [TODO] Run bash script 

## Deployment

[TODO] Create deployment strategy

## Built With

* [Bash](http://www.dropwizard.io/1.0.2/docs/) - Script to get ping data
* [NodeJS](https://maven.apache.org/) - Backend service to communicate with DB
* [Docker](https://rometools.github.io/rome/) - Container management
* [MongoDB](https://rometools.github.io/rome/) - Database

## Authors

* **Kurtis Bauer**