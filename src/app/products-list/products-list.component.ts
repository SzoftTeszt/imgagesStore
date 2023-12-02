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
  percentage=0
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
  // deleteImage(aru:any,kep:any){
  
  // }

  deleteImage(event:any){
    //  console.log(event)
     let termek = this.products.find(
      (t:any)=> {return t.key==event.key}
     )

    termek.imagesUrl=termek.imagesUrl.filter(
      (e:any)=>{return e!=event.url}
     )

     this.base.deleteProductImage(event.url)
     this.base.updateProduct(termek)

  }

  uploadImage(event:any){
    console.log("uploadImage",event)

    // this.upload=true
     Array.from(event.selectedFiles).forEach((element:any) => {
      console.log("Ciklus push")
      this.base.pushImage(event.product,element).subscribe(
        (res)=>{
          console.log(res,"%")
          this.percentage=Math.round(Number(res))
        })
    }) 


  }
}
