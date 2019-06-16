import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/todo.model';

import { UpdateTodoDetail } from '../todo.actions';
import { TodosState } from '../todo.reducer';

@Component({
  selector: 'geo-todos-detail',
  templateUrl: './todos-detail.component.html',
  styleUrls: ['./todos-detail.component.css']
})
export class TodosDetailComponent implements OnInit {

  @Input()
  public todo: Todo;

  public todoForm: FormGroup;

  constructor(private store: Store<TodosState>, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.todoForm = this.fb.group({
      title: [this.todo.title, Validators.required],
      description: this.todo.description,
    });
  }

  submit() {
    this.todoForm.updateValueAndValidity();

    const todo: Update<Todo> = {
      id: this.todo.id,
      changes: {
        ...this.todo,
        title: this.todoForm.value.title,
        description: this.todoForm.value.description
      }
    };

    this.store.dispatch(new UpdateTodoDetail({todo}));

    this.router.navigate(['/todos']);
  }
}
