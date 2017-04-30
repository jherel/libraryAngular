import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/bookList/bookList.component';
import { BookDetailComponent } from './components/bookDetail/bookDetail.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

import { BookService } from './services/book.service';
import { BookNewComponent } from './components/book-new/book-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    FlexLayoutModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
