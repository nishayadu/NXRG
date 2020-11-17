import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromEmployee from '../employee.reducer';


export interface State {

  [fromEmployee.employeeFeatureKey]: fromEmployee.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromEmployee.employeeFeatureKey]: fromEmployee.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
