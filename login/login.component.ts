import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginModalPopUpComponent } from './login-modal-pop-up/login-modal-pop-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  constructor(public dialog: MatDialog) {}
  openDialog():void {
    this.dialog.open(LoginModalPopUpComponent,{
      backdropClass: 'bdrop',
      width:'70%',
      
      // background-color: "red";
    });
    
  }
  ngOnInit(): void {
  }
}


