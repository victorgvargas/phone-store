import { Component, OnInit } from '@angular/core';
import { CellphoneModel } from './cellphone.model';
import { PassData } from '../pass-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cellphones : CellphoneModel[] = [
    new CellphoneModel("Zenphone 2",900.00,"https://imagens.canaltech.com.br/produto/1540320045-1582-principal-m.png"),
    new CellphoneModel("IPhone 11", 2000.00,"https://i.zst.com.br/images/smartphone-apple-iphone-11-64gb-camera-dupla-apple-a13-bionic-ios-13-photo929874931-12-15-15.jpg")
  ];
  searchedValue : string;
  filteredContent = [];
  isFiltered : boolean = false;

  constructor(private passData : PassData) {
    this.passData.searchContent.subscribe(passedData => {
      this.searchedValue = passedData;
      this.filterContent();
    })
  }

  ngOnInit() {
  }

  filterContent(){
    this.filteredContent = this.cellphones.filter(element => {
      return element.name.toUpperCase().includes(this.searchedValue.toUpperCase());
    });
    this.isFiltered = true;
  }
}
