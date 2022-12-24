import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsViewRoutingModule } from './ads-view-routing.module';
import { AdsViewComponent } from './ads-view.component';
import { MaterialModule } from '../../material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AdsViewComponent],
  imports: [
    CommonModule,
    AdsViewRoutingModule,
    MatIconModule,
    MaterialModule,
    MatInputModule,
  ],
})
export class AdsViewModule {}
