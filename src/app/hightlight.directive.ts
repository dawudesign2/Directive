import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 as Render} from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private render: Render
  ) { }

  @HostBinding('style.color') mycolor: string | undefined;

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.mycolor = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.mycolor = 'black';
  }

  ngOnInit() {}

}
