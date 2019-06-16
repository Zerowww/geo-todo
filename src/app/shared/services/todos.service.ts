import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private apiUrl = 'api/todos';

  constructor(private http: HttpClient) { }

  findAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  findTodo(id: string | number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  updateTodo(todo: Todo): Observable<Todo> {
      return this.http.put<Todo>(this.apiUrl, todo);
  }

  createTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }
}
