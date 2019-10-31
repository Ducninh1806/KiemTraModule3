import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://[::]:8081/books';

  constructor(private http: HttpClient) { }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL);
  }

  create(book: Partial<Book>): Observable<Book> {
    return this.http.post<Book>(this.API_URL , book);
  }

  edit(book: Partial<Book>): Observable<Book> {
    return this.http.patch<Book>(this.API_URL + '/' + book.id , book);
  }
}
