import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsViewComponent } from './details-view/components/details-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/box-details',
    pathMatch: 'full'
  },
  {
    path: 'box-details',
    component: DetailsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
