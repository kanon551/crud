import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  //constructor(){}

  // ngOnInit(): void {
  //   this.employees = [{
  //     "id": 7,
  //     "firstName": "Ramesh",
  //     "lastName": "Fadatare",
  //     "emailId": "ramesh@gmail.com"
  //   },
  //   {
  //     "id": 2,
  //     "firstName": "John",
  //     "lastName": "cena",
  //     "emailId": "cena@gmail.com"
  //   }];


  // }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();

  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
     this.employees = data;
    });
  }

}
