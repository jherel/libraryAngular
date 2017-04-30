import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from 'app/services/book.service';

import { Book } from 'app/models/book.model';

@Component({
  selector: 'app-bookList',
  templateUrl: './bookList.component.html',
  styleUrls: ['./bookList.component.css']
})
export class BookListComponent implements OnInit {

  public books: Book[];

  constructor(
    private router: Router,
    private service: BookService
  ) { }

  ngOnInit() {
    this.service.getBooks().subscribe(
      books => this.books = books
    );
  }

  newBook() {
    this.router.navigate(['/books/new'])
  }

}
