import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { TodoCreationDialogComponent } from '../todo-creation-dialog/todo-creation-dialog.component';
import { TodosListModule } from '../todos-list/todos-list.module';
import { TodosPageComponent } from './todos-page.component';
import { TodosPageRoutingModule } from './todos-page.routing';

@NgModule({
  declarations: [TodosPageComponent, TodoCreationDialogComponent],
  imports: [SharedModule, ReactiveFormsModule, TodosPageRoutingModule, TodosListModule],
  exports: [TodosPageComponent, TodoCreationDialogComponent],
  entryComponents: [TodoCreationDialogComponent],
})
export class TodosPageModule {}
