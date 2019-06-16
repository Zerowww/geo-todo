import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TodosState } from './todo.reducer';
import * as fromTodo from './todo.reducer';

// prettier-ignore
export const selectTodosState = createFeatureSelector<TodosState>('todos');

export const selectAllTodos = createSelector(
  selectTodosState,
  fromTodo.selectAll
);

export const selectAllTodosLoaded = createSelector(
  selectTodosState,
  todosState => todosState.allTodosLoaded
);
