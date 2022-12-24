import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-personal',
  templateUrl: './profile-personal.component.html',
  styleUrls: ['./profile-personal.component.scss'],
})
export class ProfilePersionalComponent implements OnInit {
  genders: any = [
    { name: 'male', sound: 'Woof!' },
    { name: 'female', sound: 'Meow!' },
    { name: 'others', sound: 'Moo!' },
  ];
  constructor() {}

  ngOnInit(): void {}
  address = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  date = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }

  isShowTongue = false;
  isShowMarital = false;
  isShowToggle = false;
  isShowBlood = false;
  isShowRelegion = false;
  isShowDiet = false;
  isShowEducation = false;
  isShowJob = false;
  isShowBehavior = false;
  isShowAddress = false;
  genderToggle = () => {
    this.isShowToggle = !this.isShowToggle;
  };
  maritalToggle = () => {
    this.isShowMarital = !this.isShowMarital;
  };
  bloodToggle = () => {
    this.isShowBlood = !this.isShowBlood;
  };
  tongueToggle = () => {
    this.isShowTongue = !this.isShowTongue;
  };
  relegionToggle = () => {
    this.isShowRelegion = !this.isShowRelegion;
  };
  dietToggle = () => {
    this.isShowDiet = !this.isShowDiet;
  };
  educationToggle = () => {
    this.isShowEducation = !this.isShowEducation;
  };
  jobToggle = () => {
    this.isShowJob = !this.isShowJob;
  };
  behaviorToggle = () => {
    this.isShowBehavior = !this.isShowBehavior;
  };
  addressToggle = () => {
    this.isShowAddress = !this.isShowAddress;
  };
}
