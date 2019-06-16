import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {TodoEffects} from './todo.effects';
import {todosReducer} from './todo.reducer';
import {TodosRoutingModule} from './todos.routing';

@NgModule({
  imports: [
    TodosRoutingModule,
    StoreModule.forFeature('todos', todosReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodosModule {}
