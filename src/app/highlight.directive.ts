import { Directive, HostListener, ElementRef } from '@angular/core';
import { Qoutes } from './qoutes'
import { QuotedComponent } from './quoted/quoted.component';
import { Quote } from '@angular/compiler';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // QuotedComponent = ""
  // constructor(public Highlight: ElementRef) { }
  // @HostListener("upVote") onClick(upVote){
  // this.onClick("upVote")
  // }
  

  }
  
// private element(action:string){
//     this.Highlight.nativeElement.style.textDecoration=alert;
//   }



