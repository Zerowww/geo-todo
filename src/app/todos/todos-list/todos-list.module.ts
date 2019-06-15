import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';

import {TodosListComponent} from './todos-list.component';

@NgModule({
  declarations: [TodosListComponent],
  imports: [SharedModule],
  exports: [TodosListComponent],
})
export class TodosListModule {}
