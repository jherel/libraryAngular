import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { Book } from 'app/models/book.model';

@Injectable()
export class BookService {

  private url: string;
  private headers: Headers;

  constructor(private http: Http) {
    this.url = 'http://localhost:3030/api/books/';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
  }

  getBooks() {
    return this.http.get(this.url, { headers: this.headers })
      .map(response => response.json())
      .catch(error => error)
  }

  getBook(id: number) {
    return this.http.get(this.url + id, { headers: this.headers })
      .map(response => response.json())
      .catch(error => error)
  }

  postBook(book: Book) {
    let body = JSON.stringify(book);
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(this.url, body, { headers: this.headers })
      .map(response => response.json())
      .catch(error => error)
  }

  putBook(book: Book) {
    return this.http.put(this.url + book.id, book, { headers: this.headers })
      .map(response => response.json())
      .catch(error => error)
  }

  deleteBook(id: number) {
    return this.http.delete(this.url + id, { headers: this.headers })
      .map(response => response.json())
      .catch(error => error)
  }

}
