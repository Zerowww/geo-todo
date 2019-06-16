import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TodosDetailModule } from '../todos-detail/todos-detail.module';
import { TodosDetailPageComponent } from './todos-detail-page.component';
import { TodosDetailPageRoutingModule } from './todos-detail-page.routing';

@NgModule({
  declarations: [TodosDetailPageComponent],
  imports: [SharedModule, TodosDetailPageRoutingModule, TodosDetailModule],
})
export class TodosDetailPageModule {}
