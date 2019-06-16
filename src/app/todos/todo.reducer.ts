import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Todo } from '../shared/models/todo.model';
import { TodoActions, TodoActionTypes } from './todo.actions';

export interface TodosState extends EntityState<Todo> {
  allTodosLoaded: boolean;
}

function sortByStateThenDateCreation(t1: Todo, t2: Todo): number {
  if (t1.state !== t2.state) {
    return t1.state ? 1 : -1;
  } else {
    return new Date(t1.creationDate).getTime() - new Date(t2.creationDate).getTime();
  }
}

// prettier-ignore
export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({
  selectId: (todo: Todo) => todo.id,
  sortComparer: sortByStateThenDateCreation
});

export const initialState: TodosState = adapter.getInitialState({
  allTodosLoaded: false,
});

export function todosReducer(state = initialState, action: TodoActions): TodosState {
  switch (action.type) {
    case TodoActionTypes.LoadTodoCollectionSuccess:
      return adapter.addAll(action.payload.todos, {...state, allTodosLoaded: true});
    case TodoActionTypes.LoadTodoSuccess:
      return adapter.addOne(action.payload.todo, state);
    case TodoActionTypes.UpdateTodo:
    case TodoActionTypes.UpdateTodoDetail:
      return adapter.updateOne(action.payload.todo, state);
    default:
      return state;
  }
}

export const {selectAll, selectEntities, selectIds, selectTotal} = adapter.getSelectors();
