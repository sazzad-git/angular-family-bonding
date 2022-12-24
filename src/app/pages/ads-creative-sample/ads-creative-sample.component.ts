import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import SwiperCore, {Autoplay, Navigation } from 'swiper';

SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-ads-creative-sample',
  templateUrl: './ads-creative-sample.component.html',
  styleUrls: ['./ads-creative-sample.component.scss'],
})
export class AdsCreativeSampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
