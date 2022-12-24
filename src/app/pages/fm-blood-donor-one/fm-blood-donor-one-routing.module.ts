import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FmBloodDonorOneComponent } from './fm-blood-donor-one.component';

const routes: Routes = [
  { path: '', component: FmBloodDonorOneComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmBloodDonorOneRoutingModule { }
