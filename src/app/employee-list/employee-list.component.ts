import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Store, select } from '@ngrx/store';
import * as EmployeeActions from '../employee.actions';
import * as fromEmployee from '../employee.selectors';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  errorMessage: string = '';
  employees: Employee[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new EmployeeActions.LoadEmployees());

    this.store.pipe(select(fromEmployee.getEmployee)).subscribe((employees) => {
      this.employees = employees;
    });
  }
}
