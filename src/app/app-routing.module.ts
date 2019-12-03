import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './components/main/tabla/tabla.component';
import { GaleriaComponent } from './components/main/galeria/galeria.component';


const routes: Routes = 
[
  {
    path: 'tabla', component: TablaComponent
  },
  {
    path: 'galeria', component: GaleriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
