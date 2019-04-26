# CTP Project (Backend)



## Getting Started

Run the following commands:
```bash
# to start server run
npm run start_dev
```



## Database Tables/Schema

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

No available endpoints yet.
