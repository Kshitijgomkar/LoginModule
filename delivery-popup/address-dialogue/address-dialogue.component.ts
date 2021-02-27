import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-dialogue',
  templateUrl: './address-dialogue.component.html',
  styleUrls: ['./address-dialogue.component.scss']
})
export class AddressDialogueComponent implements OnInit {
  addressForm: any;
  zipRegx = ("^((\\+91-?)|0)?[0-9]{6}$")
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      streetAddress: ['',Validators.required],
      landmark: [''],
      city: ['',Validators.required],
      area: ['',Validators.required],
      zip:['',[Validators.required , Validators.pattern(this.zipRegx)]],
  });
  }

  submitAddress() {
    if (!this.addressForm.valid) {
      return;
    }
    console.log(this.addressForm.value);
  }
}


