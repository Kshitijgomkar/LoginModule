import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-modal-pop-up',
  templateUrl: './login-modal-pop-up.component.html',
  styleUrls: ['./login-modal-pop-up.component.scss']
})
export class LoginModalPopUpComponent implements OnInit {
  loginForm: any;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  phoneRegx = ("^((\\+91-?)|0)?[0-9]{10}$")
  zipRegx = ("^((\\+91-?)|0)?[0-9]{6}$")
  registerForm: any;
  submitted = false;


  private selectedRole: string="user";        
  
  setradio(e: string): void {  
      this.selectedRole = e;        
  }  

  isSelected(name: string): boolean {  
      if (!this.selectedRole) { 
        // if no radio button is selected, always return false so every nothing is shown  
          return false;  
          
  }  
      return (this.selectedRole === name); // if current radio button is selected, return true, else return false  
    }   



  constructor(  private formBuilder: FormBuilder) {   }
  hide = true;
  hideSign = true;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required]
    });


    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(this.phoneRegx)]],
      birthDate: [''],
      gender: [''],
      streetAddress: [''],
      city: [''],
      country: [''],
      zip: ['', [Validators.pattern(this.zipRegx)]],
      vehicleNumber: [''],

  });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
}
