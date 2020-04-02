import { Component, OnInit,  } from '@angular/core';
import { Qoutes} from '../qoutes';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  vote = new Qoutes('author','name','Quote',new Date, 'upVote', 'dnVote')

  constructor() { }
  upvote(){
    this.vote.upVote += 1;
  }
  downvote(){
    this.vote.dnVote += 1
  }
   

  ngOnInit(): void {
  }

}
