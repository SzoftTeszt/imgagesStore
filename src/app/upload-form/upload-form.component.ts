import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Produts } from '../product';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
  selectedFile:any
  upload=false
  percentage=0

  newProduct:any={}

  constructor(private base:BaseService){
    this.newProduct.imagesUrl=[]
    this.base.getUrlSubject().subscribe(
      (url:any)=> {
        console.log("Subject")
        this.newProduct.imagesUrl?.push(url)
        console.log(this.newProduct.imagesUrl)
      }
    )
  }

  selectFile(event:any){
    console.log(event.target.files)
    this.selectedFile=event.target.files
    this.upload=false
    this.percentage=0
  }
  uploadFile(){   
    this.upload=true
    Array.from(this.selectedFile).forEach((element:any) => {
      this.base.pushImage(element).subscribe(
        (res)=>{
          console.log(res,"%")
          this.percentage=Math.round(Number(res))
        })
    }) 
  }


  addProduct(){
    console.log(this.newProduct)
    this.base.addProduct(this.newProduct)
    this.newProduct={}
    this.newProduct.imagesUrl=[]
  }


}
