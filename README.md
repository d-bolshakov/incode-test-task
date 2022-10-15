# incode-test-task

## Installation

```bash
$ npm install
```
The app requires PostgreSQL to be installed locally. Also you have to replace DB_PASSWORD variable in .env with your Postgres superuser password.

Then use the following commands to create a database, its schemas and populate it with a seed data:

```bash
$ npm run dbcreate
$ npm run migrate
$ npm run seed
```

## Seed data

The seed data includes 13 users.

1. Natalia Waller - administrator
login: nataliawaller@test.com
password: test

2. Terence Wolf
login: terencewolf@test.com
password: test,
boss id: 1

3. Lexi-Mae Milne
login: lexi-maemilne@test.com
password: test,
boss id: 2

4. Vihaan Noel
login: vihaannoel@test.com
password: test,
boss id: 2

5. Gurveer Gonzalez
login: gurveergonzalez@test.com
password: test,
boss id: 2

6. Kelsi Field
login: kelsifield@test.com
password: test,
boss id: 3

7. Janine Schultz
login: janineschultz@test.com
password: test,
boss id: 3

8. Hussein Nielsen
login: husseinnielsen@test.com
password: test,
boss id: 4

9. Cohen Wynn
login: cohenwynn@test.com
password: test,
boss id: 4

10. Bethany Montoya
login: bethanymontoya@test.com
password: test,
boss id: 6

11. Arian Richardson
login: arianrichardson@test.com
password: test,
boss id: 6

12. Lara Fletcher
login: larafletcher@test.com
password: test,
boss id: 8

13. Mahamed Macias
login: mahamedmacias@test.com
password: test,
boss id: 11

## Loging in

The login should be a vaid email.
The password should be within 3 to 10 characters long.

## Endpoints

POST /api/auth/registration - registration, the body of the request should contain name, login and password.
POST /api/auth/login - sign in, the body of the request should contain login and password.

GET /api/users/ - list of users, the request should contain Authorization header with Bearer JWT-token.
PUT /api/users/change - changing of the subordination, the request should contain Authorization header with Bearer JWT-token.
