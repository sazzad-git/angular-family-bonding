import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyAdminComponent } from './family-admin.component';

const routes: Routes = [
  {path: '', component: FamilyAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyAdminRoutingModule { }
