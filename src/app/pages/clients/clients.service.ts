import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private clients: Array<any> = [
    { name: 'Rodrigo', registeredDate: new Date(), projects: [
      { description: 'ToDo List' },
      { description: 'MakeMoney' }
    ] },
    { name: 'Felipe', registeredDate: new Date(), projects: [
      { description: 'ProManager' }
    ] },
    { name: 'Ana', registeredDate: new Date(), projects: [
      { description: 'Easy Flow' }
    ] },
    { name: 'Caio', registeredDate: new Date(), projects: [
      { description: 'VetHome' },
    ] },
  ];

  constructor() { }

  public getClients(): Array<any> {
    return this.clients;
  }
}
