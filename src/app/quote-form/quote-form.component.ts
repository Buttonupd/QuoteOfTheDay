import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoutes } from '../qoutes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
   newQuote = new Qoutes("author","name","Quote",new Date());

   @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
  this.addQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
