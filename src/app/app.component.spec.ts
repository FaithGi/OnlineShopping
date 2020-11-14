import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


import { Component, OnInit } from '@angular/core';
//import { AddImageService } from '../add-image.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

//   construc
//(private addImageDoa: AddImageService ){
//    }
  selectedFile = null;  

  onFileSelected(event)
  {
  this.selectedFile = event.target.files[0];
  }
  ngOnInit(): void {
  }

onUpload(){

}
  add
}
