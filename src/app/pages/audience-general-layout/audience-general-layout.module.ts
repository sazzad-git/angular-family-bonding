import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../material/material.module';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AudienceGeneralLayoutRoutingModule } from './audience-general-layout-routing.module';
import { AudienceGeneralLayoutComponent } from './audience-general-layout.component';


@NgModule({
  declarations: [
    AudienceGeneralLayoutComponent
  ],
  imports: [
    CommonModule,
    AudienceGeneralLayoutRoutingModule,
    MaterialModule,
    MatButtonToggleModule
  ]
})
export class AudienceGeneralLayoutModule { }
