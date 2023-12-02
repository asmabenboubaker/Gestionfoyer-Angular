import {Component, ViewChild} from '@angular/core';
import {Table} from "primeng/table";

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.scss']
})
export class ListBlocComponent {
  @ViewChild('dt') table!: Table;

  constructor(

  ) { }

}
