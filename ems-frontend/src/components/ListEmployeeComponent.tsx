import React , {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

interface Employee {
    id: number
    firstName: string
    lastName: string
    email: string
}

const ListEmployeeComponent = () => {
  
const [employees, setEmployees] = useState<Employee[]>([]) 

useEffect(()=>{
  listEmployees().then((response)=>{
    setEmployees(response.data);
  }).catch(error=>{
    console.error(error) ;
  })
}, [])


  return (
    <div className='container'>
        <h2 className='text-centered'>List of Employees</h2>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent