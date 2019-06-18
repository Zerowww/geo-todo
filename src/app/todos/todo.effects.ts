import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '../reducers';
import { Todo } from '../shared/models/todo.model';
import { TodosService } from '../shared/services/todos.service';
import { toast } from '../shared/utils';
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
  loadTodoSuccess$ = this.actions$.pipe(
    ofType<LoadTodoSuccess>(TodoActionTypes.LoadTodoSuccess),
    tap((action: LoadTodoSuccess) => {
      toast.fire({
        type: 'success',
        title: `Successfuly fetched todo
        "${action.payload.todo.title}" from database`
      });
    })
  );

  @Effect({dispatch: false})
  loadTodoFailure$ = this.actions$.pipe(
    ofType<LoadTodoFailure>(TodoActionTypes.LoadTodoFailure),
    tap((action: LoadTodoFailure) => {
      console.error(action.payload.error);
      toast.fire({
        type: 'error',
        title: 'Unable to find todo in database, you are beeing redirected to todo list',
        position: 'top'
      });
      setTimeout(() => {
        this.router.navigateByUrl('/todos');
      }, 2500);
    })
  );

  @Effect({dispatch: false})
  updateTodoSuccess$ = this.actions$.pipe(
    ofType<UpdateTodoSuccess>(TodoActionTypes.UpdateTodoSuccess),
    tap((action: UpdateTodoSuccess) => {
      toast.fire({
        type: 'success',
        title: `Successfuly updated todo informations
        "${action.payload.todo.title}" in database`,
      });
    })
  );

  @Effect({dispatch: false})
  updateTodoFailure$ = this.actions$.pipe(
    ofType<UpdateTodoFailure>(TodoActionTypes.UpdateTodoFailure),
    tap((action: UpdateTodoFailure) => {
      console.error(action.payload.error);
      toast.fire({
        type: 'error',
        title: 'Unable to update todo informations in database'
      });
    })
  );

  @Effect({dispatch: false})
  createTodoSuccess$ = this.actions$.pipe(
    ofType<CreateTodoSuccess>(TodoActionTypes.CreateTodoSuccess),
    tap((action: CreateTodoSuccess) => {
      toast.fire({
        type: 'success',
        title: `Successfuly created todo "${action.payload.todo.title}"`,
      });
    })
  );

  @Effect({dispatch: false})
  createTodoFailure$ = this.actions$.pipe(
    ofType<CreateTodoFailure>(TodoActionTypes.CreateTodoFailure),
    tap((action: CreateTodoFailure) => {
      console.error(action.payload.error);
      toast.fire({
        type: 'error',
        title: 'Unable to create todo'
      });
    })
  );

  @Effect({dispatch: false})
  loadTodoCollectionSuccess$ = this.actions$.pipe(
    ofType<LoadTodoCollectionSuccess>(TodoActionTypes.LoadTodoCollectionSuccess),
    tap((action: LoadTodoCollectionSuccess) => {
      toast.fire({
        type: 'success',
        title: `Successfuly fetched all ${action.payload.todos.length} todos from database`
      });
    })
  );

  @Effect({dispatch: false})
  loadTodoCollectionFailure$ = this.actions$.pipe(
    ofType<LoadTodoCollectionFailure>(TodoActionTypes.LoadTodoCollectionFailure),
    tap((action: LoadTodoCollectionFailure) => {
      console.error(action.payload.error);
      toast.fire({
        type: 'error',
        title: 'Unable to fetch todo collection from database'
      });
    })
  );

  constructor(private actions$: Actions, private todosService: TodosService,
    private store: Store<AppState>, private router: Router) {}

}
