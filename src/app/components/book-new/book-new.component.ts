import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BookService } from "app/services/book.service";

import { Book } from "app/models/book.model";

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  public book: Book = {
    title: '',
    description: ''
  };

  constructor(
    private router: Router,
    private service: BookService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.postBook(this.book).subscribe(
      response => {
        this.router.navigate(['/books']);
      }
    );
  }

  cancel() { this.router.navigate(['/books']); }

}
