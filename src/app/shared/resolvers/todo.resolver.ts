import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { TodoRequested } from 'src/app/todos/todo.actions';
import { selectTodoById } from 'src/app/todos/todo.selectors';

import { AppState } from '../../reducers';
import { Todo } from '../models/todo.model';



@Injectable()
export class TodoResolver implements Resolve<Todo> {
  constructor(private store: Store<AppState>) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<Todo> {
  const todoId = +route.params['id'];

    return this.store.pipe(
      select(selectTodoById(todoId)),
      tap(todo => {
        if (!todo) {
          this.store.dispatch(new TodoRequested({todoId}));
        }
      }),
      filter(todo => !!todo),
      first()
    );
  }
}
