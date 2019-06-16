import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { TodosDetailComponent } from './todos-detail.component';

@NgModule({
  declarations: [TodosDetailComponent],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [TodosDetailComponent],
})
export class TodosDetailModule {}
