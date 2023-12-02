import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-product-user-list',
  templateUrl: './product-user-list.component.html',
  styleUrls: ['./product-user-list.component.css']
})
export class ProductUserListComponent {
  products:any

  constructor(private base:BaseService){
    this.base.getProducts().subscribe(
      (res)=>this.products=res
    )
  }
}
