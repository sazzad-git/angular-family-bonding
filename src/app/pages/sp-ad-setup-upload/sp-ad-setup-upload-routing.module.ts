import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpAdSetupUploadComponent } from './sp-ad-setup-upload.component';

const routes: Routes = [{ path: '', component: SpAdSetupUploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpAdSetupUploadRoutingModule { }
