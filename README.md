````markdown
# Employee Management System

A full-stack Employee Management System built with Spring Boot and React. 
The application provides REST APIs for managing employees and a React-based 
frontend for interacting with those APIs.

## Features

- Add new employees
- View all employees
- View employee details
- Update employee information
- Delete employees
- Form validation
- Email validation
- Pagination
- Search employees
- RESTful APIs
- React frontend
- Spring Boot backend
- MySQL database
- Frontend and backend communication using Axios
- React Router for navigation

## Tech Stack

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs
- MySQL

### Frontend
- React
- TypeScript
- React Router
- Axios
- Bootstrap

## Project Structure

```text
Employee-Management-System
│
├── backend
│   └── Spring Boot application
│
└── frontend
    └── React application
````
## Screenshots

### Employee List

The main page displays employees retrieved from the Spring Boot REST API.

<img width="1920" height="1080" alt="Employee List" src="https://github.com/user-attachments/assets/2655af72-dcd4-4fab-babe-92d70e789ce9" />

### Update Employee

The update form allows existing employee information to be edited and submitted to the backend.

<img width="1920" height="1080" alt="Update Employee Form" src="https://github.com/user-attachments/assets/3aa38b57-ec98-40d0-844c-1c3a6d485d10" />

### Form Validation

The form validates required fields and email format before submitting data to the backend.
<img width="1920" height="1080" alt="Form Validation" src="https://github.com/user-attachments/assets/a3248c44-19d2-451e-9cbd-c0608a1a4417" />

## API Endpoints

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| GET    | `/api/employees`      | Get all employees  |
| GET    | `/api/employees/{id}` | Get employee by ID |
| POST   | `/api/employees`      | Create employee    |
| PUT    | `/api/employees/{id}` | Update employee    |
| DELETE | `/api/employees/{id}` | Delete employee    |

## How It Works

The React frontend communicates with the Spring Boot backend through REST APIs.

```text
React + TypeScript
        ↓
      Axios
        ↓
Spring Boot REST API
        ↓
Spring Data JPA
        ↓
      MySQL
```

## Running the Project

### Backend

1. Clone the repository.

2. Open the backend project in your IDE.

3. Configure your MySQL database in `application.properties`.

4. Start the Spring Boot application.

The backend will run on:

```text
http://localhost:8080
```

### Frontend

1. Open the frontend directory.

2. Install dependencies:

```bash
npm install
```

3. Start the React application:

```bash
npm run dev
```

The frontend will run on the local development server.

## Validation

The application performs frontend validation before sending employee data to the backend.

Examples:

* First name is required
* Last name is required
* Email is required
* Email format is validated

Backend validation is also used to maintain data integrity.

## Git Workflow

The project was developed incrementally, with features committed and pushed to GitHub as they were completed.

## Future Improvements

* Authentication and authorization
* JWT-based login
* Role-based access control
* Improved error handling
* Unit and integration testing
* Deployment

## Author

**Anmol**

Built as a full-stack learning project to practice Spring Boot, REST APIs, React, TypeScript, database integration, and Git.
