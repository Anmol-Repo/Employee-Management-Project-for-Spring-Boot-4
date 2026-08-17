# Employee Management System

A full-stack Employee Management System built with **React, TypeScript, Spring Boot, and MySQL**. The application provides a RESTful backend and a responsive frontend for creating, viewing, updating, searching, and deleting employee records.

##  Live Demo

**[View Live Application](https://ems-platform.netlify.app/)**

        > Demo employee records use synthetic sample data generated with [Mockaroo](https://mockaroo.com/) for testing and demonstration purposes.

##  Features

- Add employees
- View and search employees
- View employee details
- Update employee information
- Delete employees
- Pagination
- Form validation
- Email validation
- RESTful APIs
- React Router navigation
- Axios-based API communication
- MySQL database integration

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Axios
- Bootstrap
- Vite

### Backend

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs

### Database & Deployment

- MySQL
- Aiven
- Docker
- Docker Hub
- Render
- Netlify

##  Architecture

```text
React + TypeScript
        ↓
      Axios
        ↓
Spring Boot REST API
        ↓
Spring Data JPA / Hibernate
        ↓
      MySQL
````

##  Deployment

```text
React + Vite
     ↓
  Netlify
     ↓
Spring Boot REST API
     ↓
   Render
     ↓
MySQL Database
     ↓
   Aiven
```

##  Project Structure

```text
Employee-Management-Project
│
├── ems-backend
│   └── Spring Boot application
│
├── ems-frontend
│   └── React + TypeScript application
│
└── README.md
```

##  Screenshots

### Employee List

The main page displays employees retrieved from the Spring Boot REST API.

<img width="1920" height="1080" alt="Employee List" src="https://github.com/user-attachments/assets/2655af72-dcd4-4fab-babe-92d70e789ce9" />

### Update Employee

The update form allows existing employee information to be edited and submitted to the backend.

<img width="1920" height="1080" alt="Update Employee Form" src="https://github.com/user-attachments/assets/3aa38b57-ec98-40d0-844c-1c3a6d485d10" />

### Form Validation

The application validates required fields and email format before submitting employee data.

<img width="1920" height="1080" alt="Form Validation" src="https://github.com/user-attachments/assets/a3248c44-19d2-451e-9cbd-c0608a1a4417" />

##  API Endpoints

| Method | Endpoint              | Description        |
| ------ | --------------------- | ------------------ |
| GET    | `/api/employees`      | Get all employees  |
| GET    | `/api/employees/{id}` | Get employee by ID |
| POST   | `/api/employees`      | Create employee    |
| PUT    | `/api/employees/{id}` | Update employee    |
| DELETE | `/api/employees/{id}` | Delete employee    |

##  How It Works

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

##  Validation

The application performs validation before employee data is submitted.

Examples:

* First name is required
* Last name is required
* Email is required
* Email format is validated

Backend validation is also used to maintain data integrity.

##  Running Locally

### Backend

1. Clone the repository.
2. Open `ems-backend` in your IDE.
3. Configure the required database environment variables.
4. Start the Spring Boot application.

The backend runs on:

```text
http://localhost:8080
```

### Frontend

1. Open the `ems-frontend` directory.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

##  Environment Variables

The application uses environment variables for configuration. **Do not commit real credentials to the repository.**

### Frontend

```text
VITE_API_URL=
```

### Backend

```text
DATASOURCE_URL=
DATASOURCE_USER=
DATASOURCE_PASSWORD=
FRONTEND_URL=
```

##  Demo Data

The employee records used in the live demonstration are **synthetic sample data generated with [Mockaroo](https://mockaroo.com/)**.

Mockaroo was used to generate realistic-looking employee records for testing and demonstration purposes. **No real employee information is used.**

##  Future Improvements

* Authentication and authorization
* JWT-based authentication
* Role-based access control
* Improved error handling
* Unit and integration testing
* Automated CI/CD

##  Author

**Anmol**

Built as a full-stack project to practice **React, TypeScript, Spring Boot, REST APIs, MySQL, Docker, cloud deployment, and database integration.**

```
```
