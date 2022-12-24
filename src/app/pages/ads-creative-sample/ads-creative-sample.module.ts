import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsCreativeSampleRoutingModule } from './ads-creative-sample-routing.module';
import { AdsCreativeSampleComponent } from './ads-creative-sample.component';
import { FormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [AdsCreativeSampleComponent],
  imports: [
    CommonModule,
    AdsCreativeSampleRoutingModule,
    SwiperModule,
    FormsModule,
  ],
})
export class AdsCreativeSampleModule {}
