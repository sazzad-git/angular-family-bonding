import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FmBloodDonorRoutingModule } from './fm-blood-donor-routing.module';
import { FmBloodDonorComponent } from './fm-blood-donor.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [FmBloodDonorComponent],
  imports: [
    CommonModule,
    FmBloodDonorRoutingModule,
    MaterialModule,
    MatButtonToggleModule,
  ],
})
export class FmBloodDonorModule {}
