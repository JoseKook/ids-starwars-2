import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimeNGModule } from '../prime-ng.module';

import { InicioComponent } from './inicio/inicio.component';
import { EpisodioComponent } from './episodio/episodio.component';
import { SaberMasComponent } from './saber-mas/saber-mas.component';

import { NumerosRomanosPipe } from '../pipes/numeros-romanos.pipe';


@NgModule({
  declarations: [
    InicioComponent,
    EpisodioComponent,
    SaberMasComponent,
    NumerosRomanosPipe
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule
  ]
})
export class ComponentsModule { }
