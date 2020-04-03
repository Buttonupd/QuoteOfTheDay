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
  vote = new Qoutes('author','name','Quote',new Date, 'upVote', 'dnVote')
  upvote(){
    this.vote.upVote += 1;
  }
  downvote(){
    this.vote.dnVote += 1
  }
   
  // @Output() addVote = new EventEmitter<Qoutes>();

  // submitVote(){
  // this.addVote.emit(this.vote);
  // }

  constructor() {}
  

  ngOnInit(): void {
  }
}

