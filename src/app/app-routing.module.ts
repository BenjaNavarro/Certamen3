import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  {path:"lista",component:ListaComponent},
  {path:"form",component:FormComponent},
  {path:"vista",component:VistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
