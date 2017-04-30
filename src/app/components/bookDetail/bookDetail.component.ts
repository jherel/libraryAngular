import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookService } from 'app/services/book.service';

import { Book } from "app/models/book.model";

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookDetail.component.html',
  styleUrls: ['./bookDetail.component.css']
})
export class BookDetailComponent implements OnInit {

  public book: Book;

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private service: BookService
  ) { }

  ngOnInit() {
    let id = this.activatedRouter.snapshot.params['id'];
    this.service.getBook(id).subscribe(
      book => this.book = book
    );
  }

  editBook(id: number) {
    this.router.navigate(['/book/edit/' + id]);
  }

  removeBook() {
    let conf = confirm("Confirm delete book!");
    if (conf == true) {
      this.service.deleteBook(this.book.id).subscribe(
        response => this.router.navigate(['/books'])
      );
    }
  }

  gotoBooks() { this.router.navigate(['/books']); }

}
