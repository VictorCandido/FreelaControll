import { ClientsService } from './../clients.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
  providers: [MessageService]
})
export class ListClientsComponent implements OnInit {

  public clientsList: Array<any>;

  public client;

  public showDialog: boolean = false;
  public submitted: boolean = false;
  public dialogTitle: String;

  constructor(
    private clientsService: ClientsService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.clientsList = this.clientsService.getClients();
  }

  public openDialog(): void {
    this.showDialog = true;
  }

  public hideDialog(): void {
    this.showDialog = false;
  }

  public saveClient(): void {
    this.submitted = true;

    if (this.client.name && this.client.mail && this.client.cellphone) {
      this.hideDialog();
      this.messageService.add({severity:'success', summary:'Sucesso', detail:'Cliente adicionado com sucesso!'});
    }
  }

  public openNewClientModal(): void {
    this.openDialog();
    this.dialogTitle = 'Novo Cliente';
    this.client = {
      name: '',
      mail: '',
      cellphone: '',
      telephone: '',
      observations: ''
    };
  }

  public openEditClientModal(selectedClient): void {
    this.openDialog();
    this.dialogTitle = 'Editar Cliente';
    this.client = selectedClient;
  }

}
