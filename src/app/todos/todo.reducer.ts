import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Todo } from '../shared/models/todo.model';
import { TodoActions, TodoActionTypes } from './todo.actions';

export interface TodosState extends EntityState<Todo> {
  allTodosLoaded: boolean;
}

// prettier-ignore
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id
});

export const initialState: TodosState = adapter.getInitialState({
  allTodosLoaded: false,
});

export function todosReducer(state = initialState, action: TodoActions): TodosState {
  switch (action.type) {
    case TodoActionTypes.LoadTodosSuccess:
      return adapter.addAll(action.payload.todos, {...state, allTodosLoaded: true});
    default:
      return state;
  }
}

export const {selectAll, selectEntities, selectIds, selectTotal} = adapter.getSelectors();
