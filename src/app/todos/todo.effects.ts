import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '../reducers';
import { Todo } from '../shared/models/todo.model';
import { TodosService } from '../shared/services/todos.service';
import {
  LoadTodosFailure,
  LoadTodosSuccess,
  TodoActionTypes,
  TodosRequested,
  UpdateTodo,
  UpdateTodoFailure,
  UpdateTodoSuccess,
} from './todo.actions';
import { selectAllTodosLoaded, selectTodoById } from './todo.selectors';

@Injectable()
export class TodoEffects {

  @Effect()
  loadTodos$: Observable<Action> = this.actions$.pipe(
    ofType<TodosRequested>(TodoActionTypes.TodosRequested),
    withLatestFrom(this.store.pipe(select(selectAllTodosLoaded))),
    filter(([action, allTodosLoaded]) => !allTodosLoaded),
    mergeMap(() => this.todosService.findAllTodos().pipe(
      map((allTodos: Todo[]) => new LoadTodosSuccess({todos: allTodos})),
      catchError(error => of(new LoadTodosFailure({error})))
    ))
  );

  @Effect()
  updateTodo$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.UpdateTodo),
    mergeMap((action: UpdateTodo) => this.store.pipe(select(selectTodoById(+action.payload.todo.id)))),
    switchMap((todo: Todo) => this.todosService.updateTodo(todo).pipe(
      map((updatedTodo: Todo) => new UpdateTodoSuccess({todo: updatedTodo})),
      catchError(error => of(new UpdateTodoFailure({error}))
    ))
  ));

  constructor(private actions$: Actions, private todosService: TodosService,
    private store: Store<AppState>) {}

}
