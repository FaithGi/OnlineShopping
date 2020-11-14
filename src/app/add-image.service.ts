import { Injectable } from '@angular/core';
import { AngularFireStorage} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class AddImageService {

  constructor(private storage: AngularFireStorage) { }
  addImage(event)
{
  const file = event.target.files[0];
  const filePath ='images' + this.makeid(8) + '.jpg';
  const ref = this.storage.ref(filePath);
  const task = ref.put(file);
}

makeid(length)
{
var result= '';
var characters ='jeifffefifefsfrgugutgtughvhdjhfgojfdhfudajaadfdfd';
var charactersLength =characters.length;
for(var i =0;i<length;i++)
{
  result+= characters.charAt(Math.floor(Math.random()* charactersLength));

}
return result;
}
}
