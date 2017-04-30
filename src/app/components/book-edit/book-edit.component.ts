import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookService } from 'app/services/book.service';

import { Book } from 'app/models/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

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

  onSubmit() {
    this.service.putBook(this.book).subscribe(
      response => this.router.navigate(['/book/' + this.book.id])
    );
  }

  cancel(id: number) { this.router.navigate(['/book/' + id]); }

}
