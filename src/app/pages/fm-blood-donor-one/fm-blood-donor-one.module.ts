import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmBloodDonorOneRoutingModule } from './fm-blood-donor-one-routing.module';
import { FmBloodDonorOneComponent } from './fm-blood-donor-one.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


@NgModule({
  declarations: [FmBloodDonorOneComponent],
  imports: [
    CommonModule,
    FmBloodDonorOneRoutingModule,
    MaterialModule,
    MatButtonToggleModule,
  ],
})
export class FmBloodDonorOneModule {}
