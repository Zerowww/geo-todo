import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TodosPageComponent} from './todos-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodosPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosPageRoutingModule {}
