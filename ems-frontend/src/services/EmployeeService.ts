import axios from "axios";
import EmployeeComponent from "../components/EmployeeComponent";

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

export const getEmployee = (employeeId: number) => axios.get
(REST_API_BASE_URL + '/'+ employeeId) ;

export const updateEmployee = (employeeId: number, employee: Employee) => axios.put(REST_API_BASE_URL + '/' +  employeeId, employee) ;

export const deleteEmployee = (EmployeeId: number)=>{ return axios.delete(REST_API_BASE_URL+'/'+EmployeeId)} ;