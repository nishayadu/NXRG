import { Action } from '@ngrx/store';
import { Employee } from './employee';

export enum EmployeeActionTypes {
  LoadEmployees = '[Employee] Load Employees',
  LoadEmployeesSuccess = '[Employee] Load Employees Success',
  LoadEmployeesFailure = '[Employee] Load Employees Failure',
}

export class LoadEmployees implements Action {
  readonly type = EmployeeActionTypes.LoadEmployees;
}

export class LoadEmployeesSuccess implements Action {
  readonly type = EmployeeActionTypes.LoadEmployeesSuccess;
  constructor(public payload: { data: Employee[] }) {}
}

export class LoadEmployeesFailure implements Action {
  readonly type = EmployeeActionTypes.LoadEmployeesFailure;
  constructor(public payload: { error: string }) {}
}

export type EmployeeActions =
  | LoadEmployees
  | LoadEmployeesSuccess
  | LoadEmployeesFailure;
