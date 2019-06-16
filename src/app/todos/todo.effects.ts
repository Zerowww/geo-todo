import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { AppState } from '../reducers';
import { TodosService } from '../shared/services/todos.service';
import { LoadTodosSuccess, TodoActionTypes, TodosRequested } from './todo.actions';
import { selectAllTodosLoaded } from './todo.selectors';

@Injectable()
export class TodoEffects {

  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType<TodosRequested>(TodoActionTypes.TodosRequested),
    withLatestFrom(this.store.pipe(select(selectAllTodosLoaded))),
    filter(([action, allTodosLoaded]) => !allTodosLoaded),
    mergeMap(() => this.todosService.findAllTodos()),
    map(todos => new LoadTodosSuccess({todos}))
  );

  constructor(private actions$: Actions, private todosService: TodosService,
    private store: Store<AppState>) {}

}
