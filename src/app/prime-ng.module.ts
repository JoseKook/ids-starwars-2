import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {SkeletonModule} from 'primeng/skeleton';
import {TabViewModule} from 'primeng/tabview';






@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    SkeletonModule,
    TabViewModule
  ]
})
export class PrimeNGModule { }
