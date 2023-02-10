import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lcom1Component } from './lcom1/lcom1.component';

const routes: Routes = [
  {
    path : 'lcom',
    component : Lcom1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy1RoutingModule { }
