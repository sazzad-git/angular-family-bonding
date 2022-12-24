import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-learn-swiper',
  templateUrl: './learn-swiper.component.html',
  styleUrls: ['./learn-swiper.component.scss'],
})
export class LearnSwiperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
