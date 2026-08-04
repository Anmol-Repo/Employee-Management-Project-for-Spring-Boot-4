package net.practise.ems_backend.service.impl;

import lombok.AllArgsConstructor;
import net.practise.ems_backend.dto.EmployeeDto;
import net.practise.ems_backend.entity.Employee;
import net.practise.ems_backend.mapper.EmployeeMapper;
import net.practise.ems_backend.repository.EmployeeRepository;
import net.practise.ems_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService{

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
