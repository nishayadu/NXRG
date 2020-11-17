import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EmployeeService } from './employee.service';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as employeeActions from './employee.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  @Effect()
  loadEmployee: Observable<Action> = this.actions$.pipe(
    ofType(employeeActions.EmployeeActionTypes.LoadEmployees),
    mergeMap((action) =>
      this.employeeService.getEmployees().pipe(
        map(
          (employees) =>
            new employeeActions.LoadEmployeesSuccess({ data: employees })
        ),
        catchError((error) =>
          of(new employeeActions.LoadEmployeesFailure({ data: error }))
        )
      )
    )
  );
}
