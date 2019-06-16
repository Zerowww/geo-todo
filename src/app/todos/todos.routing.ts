import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./todos-page/todos-page.module').then(m => m.TodosPageModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./todos-detail-page/todos-detail-page.module').then(m => m.TodosDetailPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {}
