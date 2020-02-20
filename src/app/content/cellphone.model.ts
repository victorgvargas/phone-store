export class CellphoneModel {
    name : string;
    price : number;
    imgPath : string;

    constructor(name : string, price : number, imgPath : string){
        this.name = name;
        this.price = price;
        this.imgPath = imgPath;
    }
}