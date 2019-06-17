import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '../reducers';
import { Todo } from '../shared/models/todo.model';
import { TodosService } from '../shared/services/todos.service';
import {
  CreateTodo,
  CreateTodoFailure,
  CreateTodoSuccess,
  LoadTodoCollectionFailure,
  LoadTodoCollectionSuccess,
  LoadTodoFailure,
  LoadTodoSuccess,
  TodoActionTypes,
  TodoCollectionRequested,
  TodoRequested,
  UpdateTodo,
  UpdateTodoDetail,
  UpdateTodoFailure,
  UpdateTodoSuccess,
} from './todo.actions';
import { selectAllTodosLoaded, selectTodoById } from './todo.selectors';

@Injectable()
export class TodoEffects {

  @Effect()
  loadTodoCollection$: Observable<Action> = this.actions$.pipe(
    ofType<TodoCollectionRequested>(TodoActionTypes.TodoCollectionRequested),
    withLatestFrom(this.store.pipe(select(selectAllTodosLoaded))),
    filter(([action, allTodosLoaded]) => !allTodosLoaded),
    mergeMap(() => this.todosService.findAllTodos().pipe(
      map((allTodos: Todo[]) => new LoadTodoCollectionSuccess({todos: allTodos})),
      catchError(error => of(new LoadTodoCollectionFailure({error})))
    ))
  );

  @Effect()
  loadTodo$: Observable<Action> = this.actions$.pipe(
    ofType<TodoRequested>(TodoActionTypes.TodoRequested),
    mergeMap(action => this.todosService.findTodo(action.payload.todoId).pipe(
      map((todo: Todo) => new LoadTodoSuccess({todo})),
      catchError(error => of(new LoadTodoFailure({error}))
    ))
  ));

  @Effect()
  updateTodo$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.UpdateTodo),
    mergeMap((action: UpdateTodo) => this.store.pipe(select(selectTodoById(+action.payload.todo.id)))),
    switchMap((todo: Todo) => this.todosService.updateTodo(todo).pipe(
      map((updatedTodo: Todo) => new UpdateTodoSuccess({todo: updatedTodo})),
      catchError(error => of(new UpdateTodoFailure({error}))
    ))
  ));

  @Effect()
  updateTodoDetail$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.UpdateTodoDetail),
    mergeMap((action: UpdateTodoDetail) => this.store.pipe(select(selectTodoById(+action.payload.todo.id)))),
    switchMap((todo: Todo) => this.todosService.updateTodo(todo).pipe(
      map((updatedTodo: Todo) => new UpdateTodoSuccess({todo: updatedTodo})),
      catchError(error => of(new UpdateTodoFailure({error}))
    ))
  ));

  @Effect()
  createTodo$: Observable<Action> = this.actions$.pipe(
    ofType(TodoActionTypes.CreateTodo),
    mergeMap((action: CreateTodo) => this.todosService.createTodo(action.payload.todo).pipe(
      map((createdTodo: Todo) => new CreateTodoSuccess({todo: createdTodo})),
      catchError(error => of(new CreateTodoFailure({error}))
    ))
  ));

  @Effect({dispatch: false})
  loadTodoFailure$ = this.actions$.pipe(
    ofType<LoadTodoFailure>(TodoActionTypes.LoadTodoFailure),
    tap(() => {
      this.router.navigateByUrl('/todos');
    })
  );

  constructor(private actions$: Actions, private todosService: TodosService,
    private store: Store<AppState>, private router: Router) {}

}
