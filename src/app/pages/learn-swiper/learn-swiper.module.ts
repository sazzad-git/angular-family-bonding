import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnSwiperRoutingModule } from './learn-swiper-routing.module';
import { LearnSwiperComponent } from './learn-swiper.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [LearnSwiperComponent],
  imports: [CommonModule, LearnSwiperRoutingModule, SwiperModule],
})
export class LearnSwiperModule {}
