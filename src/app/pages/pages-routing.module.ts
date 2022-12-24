import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./news-letter/news-letter.module').then(
            (m) => m.NewsLetterModule
          ),
        data: { preload: true, delay: false },
      },
      {
        path: 'regester',
        loadChildren: () =>
          import('./register/register-routing.module').then(
            (m) => m.RegisterRoutingModule
          ),
        data: { preload: true, delay: false },
      },
      {
        path: 'regester-bn',
        loadChildren: () =>
          import('./regester-bn/regester-bn.module').then(
            (m) => m.RegesterBnModule
          ),
        data: { preload: true, delay: false },
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
        data: { preload: true, delay: false },
      },
      {
        path: 'regestration',
        loadChildren: () =>
          import('./regestration/regestration.module').then(
            (m) => m.RegestrationModule
          ),
        data: { preload: true, delay: false },
      },
      {
        path: 're-regestration',
        loadChildren: () =>
          import('./re-regestration/re-regestration.module').then(
            (m) => m.ReRegestrationModule
          ),
        data: { preload: true, delay: false },
      },
      {
        path: 'audience-general-layout',
        loadChildren: () =>
          import(
            './audience-general-layout/audience-general-layout.module'
          ).then((m) => m.AudienceGeneralLayoutModule),
        data: { preload: true, delay: false },
      },
      {
        path: 'family-admin',
        loadChildren: () =>
          import('./family-admin/family-admin.module').then(
            (m) => m.FamilyAdminModule
          ),
        data: { preload: true, delay: false },
      },
      {
        path: 'top-great-grand-father-name-with-surname',
        loadChildren: () =>
          import(
            './top-great-grand-father-name-with-surname/top-great-grand-father-name-with-surname-routing.module'
          ).then((m) => m.TopGreatGrandFatherNameWithSurnameRoutingModule),
        data: { preload: true, delay: false },
      },
      {
        path: 'fm-blood-donor',
        loadChildren: () =>
          import('./fm-blood-donor/fm-blood-donor-routing.module').then(
            (m) => m.FmBloodDonorRoutingModule
          ),
        data: { preload: true, delay: false },
      },
      {
        path: 'fm-blood-donor-one',
        loadChildren: () =>
          import('./fm-blood-donor-one/fm-blood-donor-one.module').then(
            (m) => m.FmBloodDonorOneModule
          ),
        data: { preload: true, delay: false },
      },
      {
        path: 'ads-view',
        loadChildren: () =>
          import('./ads-view/ads-view.module').then((m) => m.AdsViewModule),
        data: { preload: true, delay: false },
      },
      {
        path: 'profile-personal',
        loadChildren: () =>
          import('./profile-personal/profile-personal.module').then(
            (m) => m.ProfilePersonalModule
          ),
        data: { preload: false, delay: false },
      },
      {
        path: 'ads-creative-sample',
        loadChildren: () =>
          import('./ads-creative-sample/ads-creative-sample.module').then(
            (m) => m.AdsCreativeSampleModule
          ),
        data: { preload: false, delay: false },
      },
      {
        path: 'sp-ad-setup-upload',
        loadChildren: () =>
          import('./sp-ad-setup-upload/sp-ad-setup-upload.module').then(
            (m) => m.SpAdSetupUploadModule
          ),
        data: { preload: false, delay: false },
      },
      {
        path: 'learn-swiper',
        loadChildren: () =>
          import('./learn-swiper/learn-swiper.module').then(
            (m) => m.LearnSwiperModule
          ),
        data: { preload: false, delay: false },
      },
      {
        path: 'test',
        loadChildren: () =>
          import('./test/test.module').then((m) => m.TestModule),
        data: { preload: false, delay: false },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PagesRoutingModule {}
