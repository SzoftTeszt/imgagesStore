import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-images-list',
  templateUrl: './product-images-list.component.html',
  styleUrls: ['./product-images-list.component.css']
})
export class ProductImagesListComponent implements OnChanges{
  @Input() urls:any=[]
  viewImages?:[]

  aktIndex=0
  viewIndex=0

  constructor(){
    // console.log('urls',this.urls)
    // this.viewImages=this.urls.slice(0,4)
    // console.log('this.viewImages',this.viewImages)
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(0,2));
    console.log(animals);
  }

  ngOnChanges(changes: SimpleChanges): void {
      // console.log(changes)
      if (changes['urls'].currentValue){
        // this.viewImages=this.urls.slice(0,4)
        // console.log(typeof(changes['urls']))
        this.viewImages=changes['urls'].currentValue.slice(0,4)
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
