import { Component, Input, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/todo.model';

import { UpdateTodo } from '../todo.actions';
import { TodosState } from '../todo.reducer';

@Component({
  selector: 'geo-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  @Input()
  public todos: Todo[];

  constructor(private store: Store<TodosState>) {}

  ngOnInit() {}

  public onChange(todo: Todo) {
    const todoUpdate: Update<Todo> = {
      id: todo.id,
      changes: {...todo, state: !todo.state}
    };

    this.store.dispatch(new UpdateTodo({todo: todoUpdate}));
  }
}
