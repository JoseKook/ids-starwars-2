import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PrimeNGModule } from '../prime-ng.module';

import { InicioComponent } from './inicio/inicio.component';
import { EpisodioComponent } from './episodio/episodio.component';
import { SaberMasComponent } from './saber-mas/saber-mas.component';

import { NumerosRomanosPipe } from '../pipes/numeros-romanos.pipe';
import { ReversePipe } from '../pipes/reverse.pipe';


@NgModule({
  declarations: [
    InicioComponent,
    EpisodioComponent,
    SaberMasComponent,
    NumerosRomanosPipe,
    ReversePipe
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule,
    FormsModule
  ]
})
export class ComponentsModule { }
