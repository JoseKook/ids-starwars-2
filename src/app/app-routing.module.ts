import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodioComponent } from './components/episodio/episodio.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: ':episode',
    component: EpisodioComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: ''
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
