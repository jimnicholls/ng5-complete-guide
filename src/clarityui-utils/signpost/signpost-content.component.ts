import { Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core'

import { SignpostCancelDirective } from './signpost-cancel.directive'
import { SignpostDefaultFocusDirective } from './signpost-default-focus.directive'
import { SignpostResetFormDirective } from './signpost-reset-form-directive'



@Component({
  selector: 'app-signpost-content',
  templateUrl: './signpost-content.component.html',
})
export class SignpostContentComponent {

  @Input() clrPosition: string

  @Output() isOpenChanged = new EventEmitter<boolean>()

  @ContentChild(SignpostDefaultFocusDirective) defaultFocusDirective: SignpostDefaultFocusDirective | undefined

  @ContentChild(SignpostResetFormDirective) resetFormDirective: SignpostResetFormDirective | undefined


  _isOpen = false

  get isOpen(): boolean {
    return this._isOpen
  }

  set isOpen(isOpen: boolean) {
    this._isOpen = isOpen
    this.isOpenChanged.emit(isOpen)
    if (this.isOpen) {
      setTimeout(() => {
        if (this.resetFormDirective) {
          this.resetFormDirective.onSignpostOpened()
        }
        if (this.defaultFocusDirective) {
          this.defaultFocusDirective.onSignpostOpened()
        }
      })
    }
  }


  private _cancelButton: SignpostCancelDirective | undefined = undefined

  @ContentChild(SignpostCancelDirective)
  set cancelButton(cancelButton: SignpostCancelDirective | undefined) {
    if (this._cancelButton) {
      this._cancelButton.signpostContentComponent = undefined
    }
    if (cancelButton) {
      cancelButton.signpostContentComponent = this
    }
    this._cancelButton = cancelButton
  }


  @HostListener('document:keydown.escape', [ '$event' ])
  onEscapeKeydown(event: Event) {
    if (this.isOpen) {
      event.stopImmediatePropagation()
      this.isOpen = false
    }
  }

}
