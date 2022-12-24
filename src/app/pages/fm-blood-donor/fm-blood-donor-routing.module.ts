import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FmBloodDonorComponent } from './fm-blood-donor.component';

const routes: Routes = [
  { path: '', component: FmBloodDonorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmBloodDonorRoutingModule { }
