import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map, tap, retry  } from 'rxjs/operators';

import { Book } from '../models/book';
import { BOOK } from '../models/mock-book';
import { MessagesService } from './messages.service';

@Injectable({
  
	providedIn: 'root'

})


export class BookService {

  

	booksList: Book[] = [];

	addToBook(book: Book) {
		this.booksList.push(book);
	}

	getAllBooks() {
		return this.booksList;
	}

	clearBook() {
		this.booksList = [];
		return this.booksList;
	}

	getBooks(): Observable<Book[]> {
		const BOOKS = of(BOOK);
		return BOOKS;
	}
	hetBookId(id: string): Observable<Book> {
		const book = BOOK.find(h => h.id === id)!;
		return of(book);
	}
}
