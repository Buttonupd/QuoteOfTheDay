import { Component, OnInit } from '@angular/core';
import { Qoutes } from '../qoutes';

@Component({
  selector: 'app-quoted',
  templateUrl: './quoted.component.html',
  styleUrls: ['./quoted.component.css']
})
export class QuotedComponent implements OnInit {
  quotes:Qoutes[] = [
    new Qoutes('Lincoln', 'Susan', 'Do not ever be afraid of what you are not ', new Date(2020,4,14)),
    new Qoutes('Garvey', 'Soni', 'Stars cannot shine without darkness ', new Date(2020,5,14)),
    new Qoutes('Abraham','Button', 'The rose is thorny but a flower too', new Date(2020,4,19)),
    new Qoutes('Marley','Nemesis','The roots of the righteous', new Date(2020,4,17)),
    new Qoutes('I&I','Batallion','Tomorrow is another day', new Date(2020,4,18)),

  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index, 1)
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(`You are deleting ${this.quotes[index].name}`)

      if (toDelete){
        confirm(`You have successfully deleted ${this.quotes.splice(index,1)}`)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
