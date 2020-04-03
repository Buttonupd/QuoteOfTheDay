import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Qoutes } from '../qoutes'

@Component({
  selector: 'app-quoted-in-detail',
  templateUrl: './quoted-in-detail.component.html',
  styleUrls: ['./quoted-in-detail.component.css']
})
export class QuotedInDetailComponent implements OnInit {
  @Input() quotes: Qoutes;
  @Output() isComplete = new EventEmitter<boolean>();


  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quote1 = new Qoutes('Mark','Blue','Helo world',new Date, 0, 0);
  quote2 = new Qoutes('Jane','Young','Very',new Date, 0, 0);
  quote = new Qoutes('Junior','Tick','Attribute',new Date, 0, 0);
  
  upvote(){
    this.quote.upVote += 1;
  }
  downvote(){
    this.quote.dnVote += 1
  }
  // @Output() addVote = new EventEmitter<Qoutes>();

  // submitVote(){
  // this.addVote.emit(this.vote);
  // }

  constructor() {}
  

  ngOnInit(): void {
  }
}

