import { act } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Employee } from './employee';
import { EmployeeActions, EmployeeActionTypes } from './employee.actions';

export const employeeFeatureKey = 'employeesState';

export interface State {
  employee: Employee[];
  error: string;
}

export const initialState: State = {
  employee: [],
  error: '',
};

export function reducer(state = initialState, action: EmployeeActions): State {
  switch (action.type) {
    case EmployeeActionTypes.LoadEmployees:
      return {
        ...state,
      };

    case EmployeeActionTypes.LoadEmployeesSuccess:
      return {
        ...state,
        employee: action.payload.data,
        error: '',
      };

    case EmployeeActionTypes.LoadEmployeesFailure:
      return {
        ...state,
        employee: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
