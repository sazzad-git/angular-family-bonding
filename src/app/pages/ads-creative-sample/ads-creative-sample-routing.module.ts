import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsCreativeSampleComponent } from './ads-creative-sample.component';

const routes: Routes = [{ path: '', component: AdsCreativeSampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsCreativeSampleRoutingModule {}
