import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@Angular/fire';
import {environment} from '../environments/environment';
import { AddingBooksComponent } from './adding-books/adding-books.component';
import { AddImageComponent } from './add-image/add-image.component';


const routes: Routes = [{path: "add-image", component:AddImageComponent },
{path: "adding-books",component:AddingBooksComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  declarations:[AppComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
