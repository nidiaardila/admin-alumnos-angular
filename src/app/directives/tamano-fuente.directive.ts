import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTamanoFuente]'
})
export class TamanoFuenteDirective {


  constructor(private element: ElementRef, private renderer: Renderer2){
    this.renderer.setStyle(this.element.nativeElement, 'fontSize', '20px');
   }
}
