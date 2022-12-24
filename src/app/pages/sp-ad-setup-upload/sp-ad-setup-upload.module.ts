import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpAdSetupUploadRoutingModule } from './sp-ad-setup-upload-routing.module';
import { SpAdSetupUploadComponent } from './sp-ad-setup-upload.component';


@NgModule({
  declarations: [
    SpAdSetupUploadComponent
  ],
  imports: [
    CommonModule,
    SpAdSetupUploadRoutingModule
  ]
})
export class SpAdSetupUploadModule { }
