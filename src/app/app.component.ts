import { Component } from '@angular/core';
import {Employee} from './employees/employee';
import {EmployeeService} from './employees/employee.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empoloyeemanager';
  public employees: Employee[];
  constructor( private employeeService: EmployeeService) {
  }

  public getEmployee(): void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
