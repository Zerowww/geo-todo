import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'geo-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  @Input()
  public todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
