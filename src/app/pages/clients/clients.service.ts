import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private clients: Array<any> = [
    { name: 'Rodrigo', registeredDate: new Date(), mail: 'rodrigo@hotmail.com', cellphone: '(11) 99999-0000', projects: [
      { description: 'ToDo List', status: 'inprogress' },
      { description: 'MakeMoney', status: 'finished' }
    ] },
    { name: 'Felipe', registeredDate: new Date(), mail: 'felipe@gmail.com', cellphone: '(19) 98778-0987', projects: [
      { description: 'ProManager', status: 'finished' }
    ] },
    { name: 'Ana', registeredDate: new Date(), mail: 'ana@outlook.com', cellphone: '(11) 98776-4321', projects: [
      { description: 'Easy Flow', status: 'inprogress' }
    ] },
    { name: 'Caio', registeredDate: new Date(), mail: 'caio@gmail.com', cellphone: '(11) 92345-1236', projects: [
      { description: 'VetHome', status: 'canceled' },
    ] },
  ];

  constructor() { }

  public getClients(): Array<any> {
    return this.clients;
  }
}
