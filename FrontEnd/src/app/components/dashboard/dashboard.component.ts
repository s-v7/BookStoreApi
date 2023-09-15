import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';




@Component({
  
	selector: 'app-dashboard',
  
	templateUrl: './dashboard.component.html',
  
	styleUrls: ['./dashboard.component.css']
	
})


export class DashboardComponent implements OnInit {


	_books: Book[] = [];
	
	@Input() booksInput?: Book;

	books_get = this.bookService.getAllBooks();

	checkOutForm = this.formBuilder.group({
		id: '',
		bookName: '',
		price: '',
		category: '',
		author: ''
	});
	constructor( 
 		private route: ActivatedRoute,
		private bookService: BookService,  
		private formBuilder: FormBuilder,
	) {}

	
	ngOnInit(): void {
		this.getBooksList();
	} 

	getBooksList(): void {
		this.bookService.getBooks()
			.subscribe(book => book = this._books.slice(0,5));
	}
	
	onSubmit(): void {
		//this.books_get = this.bookService.clearBook();
		this.addToBook(this.Object);

		if(this.checkOutForm.value.id === ""){
			console.warn('You orde has been submitted', this.checkOutForm.value);
			this.getId(this.Object);
			this.checkOutForm.reset();
		}

	}

	addToBook(book: Book) {
		this.bookService.addToBook(book);
		window.alert('Your book has been added to the Book!');
	}
	
	Object: Book = {
		id: '7yrtr78',
		bookName: 'Silas',
		price: 70.00,
		category: 'P&D',
		author: 'Beltrano'
	};	

	getId(ptr: Book) {
		console.log(`This Id Element: ${ptr.id}!`);
		for(let s in this.Object){
			console.log(`Element position ${s}`);
		}
	}


}
