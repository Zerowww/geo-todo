import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoResolver } from 'src/app/shared/resolvers/todo.resolver';

import { TodosDetailPageComponent } from './todos-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodosDetailPageComponent,
    resolve: {
      todo: TodoResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodoResolver],
})
export class TodosDetailPageRoutingModule {}
