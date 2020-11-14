import { Injectable } from '@angular/core';
import {AngularFirestore} from '@Angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})

//ADDING BOOKS TO A CART
export class AddBooksService {

  constructor(private books: AngularFirestore) { }

  AddBooks(books){
    this.books.collection('addBooks').add(books).then(() => {

      alert('successfully added book!');

    }).catch(err =>{
        alert(err.message + ' ' + 'unable to add books!')
    })

  }

  //DELETING BOOKS
  
  deleteBooks(key){
    this.books.collection('addBooks').doc(key).delete().then(()=>{
      alert('successfully deleted book');
    }).catch(err =>{
      alert('err.message' + ' ' + 'unable to delete book')
    });
  }

  //RETURNING THE BOOKS
getBooks(){
  return this.books.collection('addBooks').snapshotChanges();
}

//UPDATING BOOKS

updateBooks(books)
{
 this.books.collection('addBooks').valueChanges(books);
}
  }

