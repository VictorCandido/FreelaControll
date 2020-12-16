import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ClientsRoutingModule } from './clients-routing.module';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';


@NgModule({
  declarations: [ListClientsComponent, CreateClientComponent, EditClientComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClientsRoutingModule,
    TableModule,
    ToolbarModule,
    CardModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    InputTextModule,
    InputTextareaModule
  ],
  exports: [
    ListClientsComponent
  ]
})
export class ClientsModule { }
