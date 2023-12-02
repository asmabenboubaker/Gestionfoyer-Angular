import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import { ListBlocComponent } from './list-bloc/list-bloc.component';
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    ListBlocComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    TableModule
  ]
})
export class BlocModule { }
