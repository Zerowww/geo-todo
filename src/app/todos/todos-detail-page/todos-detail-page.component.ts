import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/todo.model';

import { TodosState } from '../todo.reducer';

@Component({
  selector: 'geo-todos-detail-page',
  templateUrl: './todos-detail-page.component.html',
  styleUrls: ['./todos-detail-page.component.css']
})
export class TodosDetailPageComponent implements OnInit {

  public todo: Todo;

  constructor(private store: Store<TodosState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.todo = this.route.snapshot.data['todo'];
  }


}
