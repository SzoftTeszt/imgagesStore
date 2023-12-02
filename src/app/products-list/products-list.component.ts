import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  products:any

  constructor(private base:BaseService){
    this.base.getProducts().
    subscribe(
      (data:any)=>{
        this.products=data       
      }
    )
  }

  updateProduct(aru:any){
    this.base.updateProduct(aru)
  }
  deleteProduct(aru:any){
    this.base.deleteProduct(aru)
  }
  deleteImage(aru:any,kep:any){
   aru.imagesUrl=aru.imagesUrl.filter(
    (e:any)=>{return e!=kep}
   )
  }

}
