import { Directive, ElementRef, HostListener } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Directive({
  selector: '[appHashes]'
})
export class HashesDirective {

  constructor(private hashes: ElementRef) {}

  @HostListener("click") onClicks(){
    this.textDeco("line-through")}

    @HostListener("dblclick") onDoubleClicks(){
      this.textDeco("None")
    }


  private textDeco(action:string){
    this.hashes.nativeElement.style.textDecoration=action;
  }

}
