# Problem 5: A Crude Server

# Task

Develop a backend server with ExpressJS. You are required to build a set of CRUD interface that allow a user to interact with the service. You are required to use TypeScript for this task.

1. Interface functionalities:
    1. Create a resource.
    2. List resources with basic filters.
    3. Get details of a resource.
    4. Update resource details.
    5. Delete a resource.
2. You should connect your backend service with a simple database for data persistence.
3. Provide `README.md` for the configuration and the way to run application.

# Solution:
I use the ExpressJS and TypeScript to build a simple backend server, that provide APIs for `Employees` CRUD.
It connect to MongoDB to persit data.


## Structure
1. **server.ts**: use the cluster to scale up server instances
2. **app.ts**: the main application run on worker.
3. **config**: will centralize the system config and loading env
4. **exeptions**: common api exceptions
5. **middlewares**: middleware of application, such as api payload validation.
6. **routes**: define routes APIs
7. **util**:  some util functions and constants
Beside that, I use the eslint and prettier for formating.

*This is simple API for demo purpose. So I ignore some futher components like authentication, authorization, swagger, logging, unit-test, Dockerfile, ...*

## How to start server?
1. Run mongoDB locally via docker: 
    `docker-compose up -d`
2. Install dependencies:
    `yarn`
3. Setup env variables: copy teamplate from `.env.template` to `.env` file and correct with your values
4. Run in dev mode:
    `yarn dev`
5. Run in production mode:
    `yarn build && yarn start`

## How to implenent from client side?

1. Create employee:
    ```
    curl --location 'http://localhost:3000/v1/employees' \
    --data-raw '{
        "email": "thong@gmail.com",
        "name": "thong",
        "dob": "1990-01-01"
    }'
    ```
2. Update employee
    ```
    curl --location --request PUT 'http://localhost:3000/v1/employees/{{employeeId}}' \
    --header 'Content-Type: application/json' \
    --data '{
        "name": "thong 2",
        "dob": "2000-07-25"
    }'
    ```

3. Get employee by ID
    ```
    curl --location 'http://localhost:3000/v1/employees/{{employeeId}}'
    ```

4. Get list employees with filter
    ```
    curl --location 'http://localhost:3000/v1/employees?email=thong'
    ```

5. Delete an employee (soft delete)
    ```
    curl --location --request DELETE 'http://localhost:3000/v1/employees/{{employeeId}}'
    ```
