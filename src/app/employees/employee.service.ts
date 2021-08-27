import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from './employee';
import {HttpClient} from '@angular/common/http';
import {SERVER_API_URL} from './app.constant';
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee []>(`${SERVER_API_URL}employee/allEmployees`);

  }

  public addEmployee( employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${SERVER_API_URL}employee/add`, employee);

  }

  public updateEmployee( employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${SERVER_API_URL}employee/update`, employee);

  }

  public deleteEmployee( employeeId: number): Observable<void>{
    return this.http.delete<void>(`${SERVER_API_URL}employee/update/${employeeId}`);

  }
}
