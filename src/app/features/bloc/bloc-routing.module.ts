import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBlocComponent} from "./list-bloc/list-bloc.component";

const routes: Routes = [
  {path:'', component:ListBlocComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
