import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeesComponent} from '../employees.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {EmployeeService} from '../employee.service';



@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
