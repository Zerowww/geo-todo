import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { TodoDetailComponent } from './todo-detail.component';

@NgModule({
  declarations: [TodoDetailComponent],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [TodoDetailComponent],
})
export class TodoDetailModule {}
