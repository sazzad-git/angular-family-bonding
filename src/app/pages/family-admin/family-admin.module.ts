import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilyAdminRoutingModule } from './family-admin-routing.module';
import { FamilyAdminComponent } from './family-admin.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    FamilyAdminComponent
  ],
  imports: [
    CommonModule,
    FamilyAdminRoutingModule,
    MaterialModule
  ]
})
export class FamilyAdminModule { }
