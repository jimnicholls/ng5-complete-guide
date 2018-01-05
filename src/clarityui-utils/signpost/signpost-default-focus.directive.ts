import { Directive, ElementRef } from '@angular/core'



@Directive({
  selector: '[appSignpostDefaultFocus]',
})
export class SignpostDefaultFocusDirective {

  constructor(private _elementRef: ElementRef) { }


  onSignpostOpened() {
    const inputElement = <HTMLInputElement> this._elementRef.nativeElement
    inputElement.focus()
  }

}
