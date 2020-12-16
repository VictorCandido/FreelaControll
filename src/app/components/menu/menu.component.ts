import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
    { label: 'Agenda', icon: 'pi pi-fw pi-calendar', routerLink: ['/agenda'] },
    { label: 'Clientes', icon: 'pi pi-fw pi-users', routerLink: ['/clientes'] },
    { label: 'Projetos', icon: 'pi pi-fw pi-file', routerLink: ['/projetos'] },
    { label: 'Painel de Controle', icon: 'pi pi-fw pi-cog', routerLink: ['/painel-de-controle'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
