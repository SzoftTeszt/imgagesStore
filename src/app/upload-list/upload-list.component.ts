import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent {
  files:any
  constructor(private base:BaseService){
    this.base.getData().snapshotChanges().pipe(
      map(
        (changes:any)=>changes.map(
          (c:any)=>({key:c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(
      (data:any)=>{
        this.files=data
        console.log(this.files)
      }
    )
  }

  deleteFile(f:any){
    this.base.deleteFile(f)
  }
}
