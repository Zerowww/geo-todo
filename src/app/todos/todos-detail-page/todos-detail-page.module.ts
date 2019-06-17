import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TodoDetailModule } from '../todo-detail/todo-detail.module';
import { TodosDetailPageComponent } from './todos-detail-page.component';
import { TodosDetailPageRoutingModule } from './todos-detail-page.routing';

@NgModule({
  declarations: [TodosDetailPageComponent],
  imports: [SharedModule, TodosDetailPageRoutingModule, TodoDetailModule],
})
export class TodosDetailPageModule {}
