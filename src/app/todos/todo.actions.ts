import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';

import { Todo } from '../shared/models/todo.model';

export enum TodoActionTypes {
  TodosRequested = '[Todo Page] Todos Requested',
  LoadTodosSuccess = '[Todo API] Load Todos Success',
  LoadTodosFailure = '[Todo API] Load Todos Failure',

  UpdateTodo = '[Todo Page] Todo Update',
  UpdateTodoSuccess = '[Todo API] Update Todo Success',
  UpdateTodoFailure = '[Todo API] Update Todos Failure',
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

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;
  constructor(public payload: { todo: Update<Todo> }) { }
}

export class UpdateTodoSuccess implements Action {
  readonly type = TodoActionTypes.UpdateTodoSuccess;
  constructor(public payload: { todo: Todo }) { }
}

export class UpdateTodoFailure implements Action {
  readonly type = TodoActionTypes.UpdateTodoFailure;
  constructor(public payload: { error: any }) { }
}

export type TodoActions = TodosRequested | LoadTodosSuccess | LoadTodosFailure | UpdateTodo | UpdateTodoSuccess | UpdateTodoFailure;

