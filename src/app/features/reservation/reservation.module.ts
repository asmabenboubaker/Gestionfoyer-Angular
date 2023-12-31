import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationRoutingModule } from './reservation-routing.module';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ListReservationsComponent, ReservationFormComponent],
  imports: [
    ReservationRoutingModule,
    TableModule,
    TagModule,
    ConfirmDialogModule,
    CommonModule,
    FormsModule,
    ProgressBarModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [DialogService, ConfirmationService, MessageService],
})
export class ReservationModule { }
