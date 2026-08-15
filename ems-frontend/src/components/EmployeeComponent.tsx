import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    // -----STATE ----------------//
    const [firstName, setFirstName] =  useState('')
    const [lastName, setLastName]   =  useState('')
    const [email, setEmail]         =  useState('')

    
    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email:''
    }) ;

    const navigator = useNavigate();

//------------VALIDATIONS-------------------
        function validateForm(){
        let valid = true;
        
        const errorCopy = {...errors}

        if(firstName.trim()){
            errorCopy.firstName = '';
        }else{
            errorCopy.firstName = 'First name is required';
            valid = false;
        }
        
        if(lastName.trim()){
            errorCopy.lastName = '';
        }else{
            errorCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(email.trim() && email.includes('@')&& email.includes(".com")){
            errorCopy.email = '';
        }else{
            errorCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorCopy);

        return valid;
    }


    function saveEmployee(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        
        if(validateForm()){
            const employee = {firstName, lastName, email}
        console.log(employee)

        createEmployee(employee).then((Response) =>{
            console.log(Response.data);
            navigator('/employees')
        })
        }
    }


  return (
    <div className='container'>
        <br />
        <div className="row">
            <div className="card col-md-8 offset-md-2">
                <h2 className='text-center'>Add Employee</h2>
                <div className="card-body">
                    <form className='text-start' >
                        <div className="form-group  mb-3">
                            <label className="form-label fw-bold">First Name</label>
                            <input type="text" 
                            placeholder='Enter Employee First Name' name='firstName' 
                            value={firstName}  
                            className={`form-control ${errors.firstName ? 'is-invalid': ''}`}
                            onChange={(e) =>setFirstName(e.target.value)} />
                        {errors.firstName && <div className='invalid-feedback'>{errors.firstName} </div>}
                        </div>


                        <div className="form-group mb-3">
                            <label className="form-label fw-bold">Last Name</label>
                            <input type="text" 
                            placeholder='Enter Employee Last Name' name='lastName' 
                            value={lastName}  
                            className={`form-control ${errors.lastName ? 'is-invalid': ''}`} 
                            onChange={(e)=>setLastName(e.target.value)} />
                         {errors.lastName && <div className='invalid-feedback'>{errors.lastName} </div>}
                        </div>


                        <div className="form-group mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <input type="email" 
                            placeholder='Enter Employee Email' 
                            name='email' 
                            value={email}  
                           className={`form-control ${errors.email ? 'is-invalid': ''}`} 
                            onChange={(e)=>setEmail(e.target.value) } />
                        {errors.email && <div className='invalid-feedback'>{errors.email} </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>

                    </form>
                </div>
            </div>
        </div>

    </div>

  )
}

export default EmployeeComponent