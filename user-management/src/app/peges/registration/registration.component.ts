import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registration!: FormGroup;
  countries: any;
  states: any;
  cities: any;
  countryId: any;
  stateId: any;
  cityId: any;
  constructor(private service: MainService) { }

  ngOnInit() {
    this.registration = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      user_pwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      phno: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
      countryId: new FormControl('', Validators.required),
      stateId: new FormControl('', Validators.required),
      cityId: new FormControl('', Validators.required),
    });
    this.getContry();
  }

  emailExist: any = true;
  emailUnique: any;
emailcheck(email: any) {
  this.service.emailCheck(email).subscribe((res: any) => {
    console.log(res);
    if (res == "UNIQUE") {
      this.emailExist = false;
      this.emailUnique = res;

    } else if (res == "DUPLICATE") {
      this.emailExist = true;
      this.emailUnique = res;
    }
  })
}

  getContry() {
    this.service.getCountry().subscribe((res: any) => {
      console.log(res);
      this.countries = res;
    });
  }

  onCountryChange(countryId: NgForm) {
    console.log(countryId);
    this.service.getState(countryId).subscribe((res: any) => {
      console.log(res);
      this.states = res;
    });
  }

  onStateChange(stateId: NgForm) {
    console.log(stateId);
    this.service.getCity(stateId).subscribe((res: any) => {
      console.log(res);
      this.cities = res;
    });
  }

  onSubmit() {
    console.log(this.registration.value);
    if(this.emailUnique == "UNIQUE"){
      this.service.registerUser(this.registration.value).subscribe((res: any) => {
        console.log(res);
        alert(res);
      }, (error: any) => {
        console.log(error);
        alert(error.error);
      });
    }else{
      alert("Email Already Exist");
    }
  }

}
