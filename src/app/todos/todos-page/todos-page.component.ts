import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/todo.model';

import { TodoCollectionRequested } from '../todo.actions';
import { TodosState } from '../todo.reducer';
import { selectAllTodos } from '../todo.selectors';

@Component({
  selector: 'geo-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css'],
})
export class TodosPageComponent implements OnInit {
  public allTodos$: Observable<Todo[]>;

  constructor(private store: Store<TodosState>) {}

  ngOnInit() {
    this.store.dispatch(new TodoCollectionRequested());

    this.allTodos$ = this.store.pipe(select(selectAllTodos));
  }
}
