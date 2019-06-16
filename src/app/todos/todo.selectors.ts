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

export const selectTodosEntities = createSelector(
  selectTodosState,
  fromTodo.selectEntities
);

export const selectTodoById = (todoId: number) =>
  createSelector(
    selectTodosEntities,
    todoEntities => todoEntities[todoId]
  );
