import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, } from '@angular/core'

import { ShoppingListItem } from './shopping-list.model'
import { SignpostContentComponent } from '../clarityui-utils/signpost/signpost-content.component'



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


  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('shoppingList')) {
      this.selected = this.shoppingList.filter(_1 => _1.ticked)
    }
  }


  isEmpty() {
    return !this.shoppingList.length
  }


  onGridSelectedChanged() {
    const selectedIds = new Set(this.selected.map(_1 => _1.id))
    for (const i of this.shoppingList) {
      i.ticked = selectedIds.has(i.id)
    }
  }


  onAddToShoppingList(event: Event, prompt: SignpostContentComponent, itemInput: HTMLInputElement) {
    event.preventDefault()
    prompt.isOpen = false
    const description = itemInput.value.trim()
    if (description) {
      const newItem = new ShoppingListItem(description)
      this.itemAdded.emit(newItem)
    }
  }


  onClearConfirmed(clearConfirmation: SignpostContentComponent) {
    clearConfirmation.isOpen = false
    this.cleared.emit()
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
