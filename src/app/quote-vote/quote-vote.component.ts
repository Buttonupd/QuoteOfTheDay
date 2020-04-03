import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Qoutes} from '../qoutes';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  vote = new Qoutes('author','name','Quote',new Date, 'upVote', 'dnVote')

  upvote(){
    this.vote.upVote += 1;
  }
  downvote(){
    this.vote.dnVote += 1
  }
   
  @Output() addVote = new EventEmitter<Qoutes>();

  submitVote(){
  this.addVote.emit(this.vote);
  }

  constructor() { }
  

  ngOnInit(): void {
  }

}
