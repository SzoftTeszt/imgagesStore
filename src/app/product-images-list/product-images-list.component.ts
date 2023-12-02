import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-product-images-list',
  templateUrl: './product-images-list.component.html',
  styleUrls: ['./product-images-list.component.css']
})
export class ProductImagesListComponent implements OnChanges{
  @Input() product:any=[]
  @Input() admin=false
  @Output() deleteImage = new EventEmitter()
  @Output() uploadImage = new EventEmitter()

  viewImages?:[]
  urls:any
  aktIndex=0
  viewIndex=0
  key:any
  selectedFile:any
  upload=false
  percentage=0
  

  newProduct:any={}

  // constructor(private base:BaseService){
  //   this.newProduct.imagesUrl=[]
  //   this.base.getUrlSubject().subscribe(
  //     (url:any)=> {
  //       console.log("Subject")
  //       this.newProduct.imagesUrl?.push(url)
  //       console.log(this.newProduct.imagesUrl)
  //     }
  //   )
  // }

  selectFile(event:any){
    console.log(event.target.files)
    this.selectedFile=event.target.files
    this.upload=false
    this.percentage=0
  }

  deleteFile(url:any){
    this.deleteImage.emit({key:this.key,url:url})
  }

  uploadFile(){   
    let body={product:this.product, selectedFiles:this.selectedFile}
    console.log("body",body)
    this.uploadImage.emit(body)

    // this.upload=true
    // Array.from(this.selectedFile).forEach((element:any) => {
    //   this.base.pushImage(element).subscribe(
    //     (res)=>{
    //       console.log(res,"%")
    //       this.percentage=Math.round(Number(res))
    //     })
    // }) 
  }

  constructor(private base:BaseService){


  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log(changes)
      if (changes['product'].currentValue){
        console.log(changes['product'])
        // this.viewImages=this.urls.slice(0,4)
        // console.log(typeof(changes['urls']))
        this.viewImages=changes['product'].currentValue.imagesUrl.slice(0,4)
        this.urls=changes['product'].currentValue.imagesUrl
        this.key=changes['product'].currentValue.key
        // console.log("Images",this.viewImages)
      }
  }

  left(){    
    if (this.aktIndex>0) this.aktIndex--
    this.viewImages=this.urls.slice(this.aktIndex,this.aktIndex+4)
  }

  right(){
    console.log("ai",this.aktIndex)
    console.log("urls.length",this.urls.length)
    if (this.aktIndex+5<=this.urls.length) this.aktIndex++
    console.log("ai",this.aktIndex)
    

    this.viewImages=this.urls.slice(this.aktIndex,this.aktIndex+4)
    console.log("view",this.viewImages)
  }

  imageChange(i:any){
    this.viewIndex=this.aktIndex+i
  }
}
