import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsViewComponent } from './ads-view.component';

const routes: Routes = [{ path: '', component: AdsViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsViewRoutingModule {}
