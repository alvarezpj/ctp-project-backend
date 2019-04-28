# CTP Project (Backend)



## Getting Started

To begin with, create a locally accessible postgres database by running the next command. Make sure to replace ```database_username``` with your username and ```database_name``` with the name you want to give to the database. 

```bash
createdb -h localhost -U database_username database_name
```

Next, create a ```.env``` file in the project's root directory. The variables you must provide a value for are listed in [env.example](./env.example).

After following the previous two steps, your are now ready to run the API. First, open up a terminal window and change to the project's root directory. Then, run the following commands in order:

```bash
npm install
npm run migrate
npm run start_dev
```

These commands will install all the dependencies, migrate the API's models to the database, and start the API, respectively.


## Database Schema

This API's database has two tables: *users* and *users_events*.

| users |
|:-----:|
| id : INTEGER (PK) |
| first_name : STRING |
| last_name : STRING |
| email : STRING, UNIQUE |
| password_hash : STRING |

| users_events |
|:------------:|
| id : INTEGER (PK) |
| user_id : INTEGER (FK, references(users, id)) |
| event_id : INTEGER |



## Available Endpoints

At the moment, these are all the available endpoints:

* GET   /api/meetup    -  retrieve [meetup.com](https://www.meetup.com/) data. Must provide the following as urlencoded: ```limit```, ```keywords```
* POST  /api/register  -  register a new user. Must provide the following as urlencoded: ```first_name```, ```last_name```, ```email```, ```password```
* POST  /api/login     -  log in an existing user. Must provide the following as urlencoded: ```email```, ```password```. Upon success, client will be sent a JSON object containing its information an a signed token
