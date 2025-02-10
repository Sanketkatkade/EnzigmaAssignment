# To-Do List Application API Documentation

## Overview

The To-Do List Application provides a RESTful API that enables users to manage their tasks efficiently. Users can create, update, delete, and retrieve tasks using various API endpoints.

## Getting Started

To start using the To-Do List Application API, follow these steps:

Base URL:  `http://localhost:3000/api/task`

Authentication: No authentication required.

Request Format: All requests and responses use the JSON format.

Rate Limits: No specific rate limits for this API at this time.

## Endpoints

## 1. Create a Task

POST` /api/task
`

Create a new task in the To-Do List.

**Request Body**
```
{
  "title": "Task Title",
  "description": "Task description",
  "completed": false
}
```

**Response**
Status: `201 Created`
```

{
  "_id": "task-id",
  "title": "Task Title",
  "description": "Task description",
  "completed": false
}
```
## 2. Get All Tasks
`
GET /api/task
`

Retrieve all tasks in the To-Do List.

**Response**

Status: `200 OK`
```
[
  {
    "_id": "task-id",
    "title": "Task Title",
    "description": "Task description",
    "completed": false
  }
]
```
## 3. Update a Task

PUT `/api/task/:id
`

Update an existing task by its ID.

**Request Body**
```
{
  "title": "Updated Task Title",
  "description": "Updated task description",
  "completed": true
}
```
**Response**

Status: `200 OK`
```
{
  "_id": "task-id",
  "title": "Updated Task Title",
  "description": "Updated task description",
  "completed": true
}
```
## 4. Delete a Task

DELETE `/api/task/:id
`

Delete a task by its ID.

**Response**

Status: `200 OK`
```
{
  "message": "Task deleted successfully."
}
```
##  Conclusion

The To-Do List Application API allows users to manage tasks with ease. It provides simple CRUD operations without requiring authentication. This API can be integrated into any front-end application to enhance task management functionality.


# Mocha Testing steps
### Step 1. Install Mocha and Chai (If Not Installed)
If you haven’t installed Mocha and Chai yet, do it now:
```
npm install --save-dev mocha chai
```

### Step 2. Update package.json (Optional)
Modify package.json to add a test script:

```
"scripts": {
  "test": "mocha"
}
```
  Now, you can run tests using:
```
npm test
```

### Step 3. Running Tests Correctly
Instead of using node, always run tests with mocha:
```
npx mocha tests/example.test.js
```
  or
```
npm test   # If you configured package.json
```

### Step 4. Expected Output
Your output should be similar to:

Server running on port 3000

  API Tests
    ✔ should return health status
    ✔ should create a new task (149ms)
    ✔ should GET all tasks (45ms)
    ✔ should update an existing task (59ms)
    ✔ should delete an existing task

  5 passing (311ms)

### Step 5. Debugging & Termination
If the tests get stuck, use CTRL + C to terminate.
If mocha is not found, try:
```
npx mocha
```