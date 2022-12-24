import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePersonalRoutingModule } from './profile-personal-routing.module';
import { ProfilePersionalComponent } from './profile-personal.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [ProfilePersionalComponent],
  imports: [
    CommonModule,
    ProfilePersonalRoutingModule,
    MatButtonToggleModule,
    MaterialModule,
  ],
})
export class ProfilePersonalModule {}
