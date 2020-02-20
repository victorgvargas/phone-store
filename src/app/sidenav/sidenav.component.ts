import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PassData } from '../pass-data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  cellphone : string;
  activeText : string = "Alphabetical";
  firstOptionText : string = 'Highest Price';
  secondOptionText : string = 'Lowest Price';
 
  constructor(private passData : PassData) { }

  ngOnInit() {
  }

  onSearch() {
    console.log('Function fired!');
    this.passData.searchContent.next(this.cellphone);
  }

  orderOptions(orderId : number){
    if (orderId === 1) {
      let temp;
      temp = this.activeText;
      this.activeText = this.firstOptionText;
      this.firstOptionText = temp;
    }
    if (orderId === 2) {
      let temp;
      temp = this.activeText;
      this.activeText = this.secondOptionText;
      this.secondOptionText = temp;
    }
  }

}