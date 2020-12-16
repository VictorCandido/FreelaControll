import { AgendaComponent } from './pages/agenda/agenda.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'clientes', loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule) },
  { path: 'projetos', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
