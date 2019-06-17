import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';

import { Todo } from '../shared/models/todo.model';

export enum TodoActionTypes {
  TodoCollectionRequested = '[Todo Page] Todo Collection Requested',
  LoadTodoCollectionSuccess = '[Todo API] Load Todo Collection Success',
  LoadTodoCollectionFailure = '[Todo API] Load Todo Collection Failure',

  TodoRequested = '[Todo Detail Page] Todo Requested',
  LoadTodoSuccess = '[Todo API] Load Todo Success',
  LoadTodoFailure = '[Todo API] Load Todo Failure',

  UpdateTodo = '[Todo Page] Todo Update',
  UpdateTodoDetail = '[Todo Detail Page] Todo Update',
  UpdateTodoSuccess = '[Todo API] Update Todo Success',
  UpdateTodoFailure = '[Todo API] Update Todos Failure',

  CreateTodo = '[Todo Creation Dialog] Todo Create',
  CreateTodoSuccess = '[Todo API] Create Todo Success',
  CreateTodoFailure = '[Todo API] Create Todos Failure',
}

export class TodoCollectionRequested implements Action {
  readonly type = TodoActionTypes.TodoCollectionRequested;
}
export class LoadTodoCollectionSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodoCollectionSuccess;
  constructor(public payload: { todos: Todo[] }) { }
}
export class LoadTodoCollectionFailure implements Action {
  readonly type = TodoActionTypes.LoadTodoCollectionFailure;
  constructor(public payload: { error: any }) { }
}
export class TodoRequested implements Action {
  readonly type = TodoActionTypes.TodoRequested;
  constructor(public payload: { todoId: number }) { }
}
export class LoadTodoSuccess implements Action {
  readonly type = TodoActionTypes.LoadTodoSuccess;
  constructor(public payload: { todo: Todo }) { }
}
export class LoadTodoFailure implements Action {
  readonly type = TodoActionTypes.LoadTodoFailure;
  constructor(public payload: { error: any }) { }
}

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;
  constructor(public payload: { todo: Update<Todo> }) { }
}
export class UpdateTodoDetail implements Action {
  readonly type = TodoActionTypes.UpdateTodoDetail;
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
export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CreateTodo;
  constructor(public payload: { todo: Todo }) { }
}
export class CreateTodoSuccess implements Action {
  readonly type = TodoActionTypes.CreateTodoSuccess;
  constructor(public payload: { todo: Todo }) { }
}
export class CreateTodoFailure implements Action {
  readonly type = TodoActionTypes.CreateTodoFailure;
  constructor(public payload: { error: any }) { }
}

export type TodoActions =
  TodoCollectionRequested |
  LoadTodoCollectionSuccess |
  LoadTodoCollectionFailure |
  TodoRequested |
  LoadTodoSuccess |
  LoadTodoFailure |
  UpdateTodo |
  UpdateTodoDetail |
  UpdateTodoSuccess |
  UpdateTodoFailure |
  CreateTodo |
  CreateTodoSuccess |
  CreateTodoFailure;

