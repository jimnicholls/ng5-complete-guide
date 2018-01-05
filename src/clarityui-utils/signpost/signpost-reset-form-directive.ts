import { Directive, ElementRef } from '@angular/core'



@Directive({
  selector: '[appSignpostResetForm]',
})
export class SignpostResetFormDirective {

  constructor(private _elementRef: ElementRef) { }


  onSignpostOpened() {
    const formElement = <HTMLFormElement> this._elementRef.nativeElement
    formElement.reset()
  }

}
