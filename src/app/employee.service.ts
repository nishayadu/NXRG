import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'assets/employee-data.json';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee> {
    return this.http.get(this.employeeUrl).pipe(
      map((data: Employee) => {
        return data;
      })
    );
  }
}
