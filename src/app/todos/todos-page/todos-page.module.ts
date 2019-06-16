import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';

import {TodosListModule} from '../todos-list/todos-list.module';
import {TodosPageComponent} from './todos-page.component';
import {TodosPageRoutingModule} from './todos-page.routing';

@NgModule({
  declarations: [TodosPageComponent],
  imports: [SharedModule, TodosPageRoutingModule, TodosListModule],
  exports: [TodosPageComponent],
})
export class TodosPageModule {}
