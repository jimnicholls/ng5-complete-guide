import { Component, HostListener, OnInit, ViewChild } from '@angular/core'

import { sampleShoppingList, ShoppingListItem } from './shopping-list.model'



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: [ './shopping-list.component.css' ],
})
export class ShoppingListComponent implements OnInit {

  private _shoppingList: ShoppingListItem[]
  selected: ShoppingListItem[]
  viewAs: 'cards' | 'list' = 'cards'
  @ViewChild('clearConfirmationContent') clearConfirmationContent: any



  constructor() {
    this.addSampleList()
  }


  ngOnInit() { }


  get shoppingList(): ShoppingListItem[] {
    return this._shoppingList
  }

  set shoppingList(newShoppingList: ShoppingListItem[]) {
    this._shoppingList = newShoppingList
    this.selected = newShoppingList.filter(_1 => _1.ticked)
  }


  isEmpty() {
    return !this._shoppingList.length
  }


  onGridSelectedChanged() {
    const selectedIds = new Set(this.selected.map(_1 => _1.id ))
    for (const i of this.shoppingList) {
      i.ticked = selectedIds.has(i.id)
    }
  }


  addSampleList() {
    this.shoppingList = [ ...sampleShoppingList ]
  }


  onClearConfirmationCancel() {
    this.clearConfirmationContent.close()
  }


  onClearConfirmationClear() {
    this.clearConfirmationContent.close()
    this.shoppingList = []
  }


  @HostListener('document:keydown.escape')
  onEscapeKeydown() {
    if (this.clearConfirmationContent && this.clearConfirmationContent.ifOpenService.open) {
      this.clearConfirmationContent.close()
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
