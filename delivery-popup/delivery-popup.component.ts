import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddressDialogueComponent } from './address-dialogue/address-dialogue.component';

@Component({
  selector: 'app-delivery-popup',
  templateUrl: './delivery-popup.component.html',
  styleUrls: ['./delivery-popup.component.scss']
})
export class DeliveryPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog():void {
    this.dialog.open(AddressDialogueComponent,{
      backdropClass: 'bdrop',
      width:'70%',
      
      // background-color: "red";
    });
    
  }
  ngOnInit(): void {
  }
}
