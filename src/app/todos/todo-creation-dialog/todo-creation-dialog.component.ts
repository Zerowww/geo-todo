import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/todo.model';

import { CreateTodo } from '../todo.actions';
import { TodosState } from '../todo.reducer';

@Component({
  selector: 'geo-todo-creation-dialog',
  templateUrl: './todo-creation-dialog.component.html',
  styleUrls: ['./todo-creation-dialog.component.css']
})
export class TodoCreationDialogComponent {
  public todoForm: FormGroup;
  public todoToCreate: Todo;

  constructor(private store: Store<TodosState>,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TodoCreationDialogComponent>) {
      this.todoForm = this.fb.group({
        id: null,
        title: ['', Validators.required],
        description: '',
        state: false,
        creationDate: new Date()
      });
    }

  public save(): void {
    const todo = this.todoForm.value;

    console.log(todo);

    this.store.dispatch(new CreateTodo({ todo }));

    this.dialogRef.close();
  }

  public close(): void {
    this.dialogRef.close();
  }

  public logForm(todoForm): void {
    console.log(todoForm);
  }
}
