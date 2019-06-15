import {NgModule} from '@angular/core';

import {TodosPageModule} from './todos-page/todos-page.module';
import {TodosRoutingModule} from './todos.routing';

@NgModule({
  imports: [TodosPageModule, TodosRoutingModule],
})
export class TodosModule {}
