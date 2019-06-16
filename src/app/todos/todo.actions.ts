import { Action } from '@ngrx/store';

import { Todo } from '../shared/models/todo.model';

export enum TodoActionTypes {
  TodosRequested = '[Todo Page] Todos Requested',
  LoadTodosSuccess = '[Todo API] Load Todos Success',
  LoadTodosFailure = '[Todo API] Load Todos Failure',
}

export class TodosRequested implements Action {
  readonly type = TodoActionTypes.TodosRequested;
}

export class LoadTodosSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodosSuccess;
  constructor(public payload: { todos: Todo[] }) { }
}

export class LoadTodosFailure implements Action {
  readonly type = TodoActionTypes.LoadTodosFailure;
  constructor(public payload: { error: any }) { }
}

export type TodoActions = TodosRequested | LoadTodosSuccess | LoadTodosFailure;

