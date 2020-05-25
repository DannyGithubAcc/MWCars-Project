import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ApproutesRoutingModule } from './approutes-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApproutesRoutingModule
  ],
  exports: [RouterModule]
})
export class ApproutesModule { }
