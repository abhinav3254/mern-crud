```
brew services start mongodb-community@7.0
```


```
brew services stop mongodb-community@7.0
```


# Employee Management API

This is a simple RESTful API for managing employees. It provides endpoints to perform basic CRUD operations (Create, Read, Update, Delete) on employee records.

## Getting Started

Before running the API, make sure to install the required dependencies. Use the following command:

```bash
npm install
```

Then, start the server using:

```bash
npm start
```

The API will be running on `http://localhost:8080`.

## API Endpoints

### Get All Employees

```http
GET /employees
```

Retrieve a list of all employees from the database.

### Get Employee by Email

```http
GET /employees/:email
```

Retrieve an employee by email from the database.

### Add New Employee

```http
POST /employees/add
```

Add a new employee to the database.

#### Request Body

```json
{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "address": {
    "street": "123 Main St",
    "city": "Cityville",
    "state": "CA",
    "country": "USA",
    "zip": "12345"
  }
}
```

### Delete Employee by Email

```http
DELETE /employees/:email
```

Delete an employee by email from the database.

### Update Employee by Email

```http
PUT /employees/update/:email
```

Update an employee by email in the database.

#### Request Body (Optional)

Provide the fields you want to update:

```json
{
  "name": "Updated Name",
  "age": 31,
  "address": {
    "city": "Updated City"
  }
}
```

## Error Responses

- `404 Not Found`: Employee not found.
- `500 Internal Server Error`: Internal server error occurred.
- `400 Bad Request`: Email already exists or other validation errors.

## Dependencies

- Express: Web application framework for Node.js
- Mongoose: MongoDB object modeling for Node.js
- Body-parser: Middleware to parse incoming request bodies
- Cors: Middleware for enabling CORS (Cross-Origin Resource Sharing)

## Author

[abhinav3254]('https://github.com/abhinav3254')