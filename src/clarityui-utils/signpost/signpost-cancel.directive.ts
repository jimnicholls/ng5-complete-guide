import { Directive, HostListener } from '@angular/core'

import { SignpostContentComponent } from './signpost-content.component'



@Directive({
  selector: '[appSignpostCancel]',
})
export class SignpostCancelDirective {

  signpostContentComponent: SignpostContentComponent | undefined = undefined


  @HostListener('click', [ '$event' ])
  onClick(event: Event) {
    if (this.signpostContentComponent) {
      event.stopImmediatePropagation()
      this.signpostContentComponent.isOpen = false
    }
  }

}
