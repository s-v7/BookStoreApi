import { Injectable } from '@angular/core';



@Injectable({
  
	providedIn: 'root'


})


export class MessagesService {

  

	msgService: string[] = [];

	add(msg: string) {
		this.msgService.push(msg);
	}

	clean() {
		this.msgService = [];
	}
}
