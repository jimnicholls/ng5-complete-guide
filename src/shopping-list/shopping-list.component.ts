import {
  Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges,
  ViewChild,
} from '@angular/core'

import { ShoppingListItem } from './shopping-list.model'



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ],
})
export class ShoppingListComponent implements OnChanges {

  @Input() shoppingList: ShoppingListItem[]

  @Output() itemAdded = new EventEmitter<ShoppingListItem>()
  @Output() cleared = new EventEmitter()

  selected: ShoppingListItem[]

  viewAs: 'cards' | 'list' = 'cards'

  @ViewChild('addPromptContent') addPromptContent: any
  @ViewChild('addItemInput') addItemInput: ElementRef

  @ViewChild('clearConfirmationContent') clearConfirmationContent: any


  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('shoppingList')) {
      this.selected = this.shoppingList.filter(_1 => _1.ticked)
    }
  }


  isEmpty() {
    return !this.shoppingList.length
  }


  onGridSelectedChanged() {
    const selectedIds = new Set(this.selected.map(_1 => _1.id ))
    for (const i of this.shoppingList) {
      i.ticked = selectedIds.has(i.id)
    }
  }


  onAddSubmitted(event: Event) {
    event.preventDefault()
    this.addPromptContent.close()
    const description = (<HTMLInputElement> this.addItemInput.nativeElement).value.trim()
    if (description) {
      const newItem = new ShoppingListItem(description)
      this.itemAdded.emit(newItem)
    }
  }


  onClearConfirmationCancel() {
    this.clearConfirmationContent.close()
  }


  onClearConfirmationClear() {
    this.clearConfirmationContent.close()
    this.cleared.emit()
  }


  @HostListener('document:keydown.escape')
  onEscapeKeydown() {
    if (this.clearConfirmationContent && this.clearConfirmationContent.ifOpenService.open) {
      this.clearConfirmationContent.close()
    } else if (this.addPromptContent && this.addPromptContent.ifOpenService.open) {
      this.addPromptContent.close()
    }
  }


  onCardClicked(item: ShoppingListItem) {
    item.ticked = !item.ticked
    if (item.ticked) {
      this.selected.push(item)
    } else {
      this.selected = this.selected.filter(_1 => _1 !== item)
    }
  }

}
