import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardStatsComponent } from '../card-stats/card-stats.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardStatsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ], 
  exports: []
})
export class HomeModule { }
