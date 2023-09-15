import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BOOK } from '../../models/mock-book';
import { BookService } from '../../services/book.service';


@Component({
  
	selector: 'app-home',
  
	templateUrl: './home.component.html',
  
	styleUrls: ['./home.component.css']

})


export class HomeComponent implements OnInit {

	//booksVector!: typeof BOOK;

	booksVector: Book[] = [];

	selectedBook?: Book;

	constructor(private bookService: BookService ){ this.booksVector = []; }
	
	ngOnInit(): void {
		this.getBooks();
	}

	onSelect(book: Book): void {
		this.selectedBook = book;
	}

	getBooks(): void {
		this.bookService.getBooks().subscribe(bok => bok = this.booksVector);
	}

}
