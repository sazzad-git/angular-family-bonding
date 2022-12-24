import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fm-blood-donor',
  templateUrl: './fm-blood-donor.component.html',
  styleUrls: ['./fm-blood-donor.component.scss'],
})
export class FmBloodDonorComponent implements OnInit {
  genders: any = [
    { name: 'male', sound: 'Woof!' },
    { name: 'female', sound: 'Meow!' },
    { name: 'others', sound: 'Moo!' },
  ];
  constructor() {}

  ngOnInit(): void {}
  serialNumber = new FormControl('', [Validators.required]);
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
}
