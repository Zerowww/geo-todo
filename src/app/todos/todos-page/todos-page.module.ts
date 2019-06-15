import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TodosListModule } from '../todos-list/todos-list.module';
import { TodosPageComponent } from './todos-page.component';

@NgModule({
  declarations: [TodosPageComponent],
  imports: [SharedModule, TodosListModule],
  exports: [TodosPageComponent],
})
export class TodosPageModule {}
