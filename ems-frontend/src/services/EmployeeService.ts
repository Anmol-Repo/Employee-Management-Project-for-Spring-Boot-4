import axios from "axios";

interface CreateEmployee {
    firstName: string;
    lastName: string;
    email: string;
}

export interface Employee {
    id:  number;
    firstName: string;
    lastName: string;
    email:  string;
}

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get<Employee[]>(REST_API_BASE_URL);

export const createEmployee = (employee: CreateEmployee) => axios.post<Employee[]>(REST_API_BASE_URL,employee);