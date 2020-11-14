import { Component, OnInit } from '@angular/core';
import { AddImageService } from '../add-image.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  constructor(private http: HttpClient ){

   }
  selectedFile: File = null;  

  onFileSelected(event)
  {
  this.selectedFile =<File> event.target.files[0];
  }
  ngOnInit(): void {
  }

onUpload(){

const fd = new FormData();
fd.append('image',this.selectedFile.name);
this.http.post('https://console.firebase.google.com/project/faith-e7144/functions/list',fd)
.subscribe(res => {
   console.log(res);
});
}
  add
}
