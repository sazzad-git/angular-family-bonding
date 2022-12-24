import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePersionalComponent } from './profile-personal.component';

const routes: Routes = [{ path: '', component: ProfilePersionalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePersonalRoutingModule {}
