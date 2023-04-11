# Docker-Flask-Mongo

This is a repository in which I created a small aplication that consist in a CRUD API using flask in python and mongoDB as a database server.

It is structured in 2 containers one for the flask application and other to the mongoDB database.

It is important that if you want to make it work with other database, you can swap the credentials so you just choose your workspace

## Docker compose

To use it, you need to have installed docker and go into the root directory of the project, then run this command:

```docker
docker compose up -d
```

After this, you will have at port 5000 a flask application running and connected to the database. You have [here](https://github.com/ClearCB/ollivanders-flask) some of the endpoints and a more detailed description about the endpoints this API has.
