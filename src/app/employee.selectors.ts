import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './employee.reducer';

const getEmployeeFeatureState = createFeatureSelector<State>('employeesState');

export const getEmployee = createSelector(
  getEmployeeFeatureState,
  (state) => state.employee
);

export const getError = createSelector(
  getEmployeeFeatureState,
  (state) => state.error
);
