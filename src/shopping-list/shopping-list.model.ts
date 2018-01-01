import * as uuid from 'uuid/v4'


export class ShoppingListItem {

  id: string


  constructor(public description: string, public ticked: boolean = false) {
    this.id = uuid()
  }

}


export const sampleShoppingList: ShoppingListItem[] = [
  new ShoppingListItem('500g lean beef mince'),
  new ShoppingListItem('1 onion, finely chopped'),
  new ShoppingListItem('570g jar tomato, onion & basil chunky sauce', true),
  new ShoppingListItem('400g Barilla Spaghetti'),
  ...generateShoppingListItems(10)
]


function* generateShoppingListItems(count: number): IterableIterator<ShoppingListItem> {
  for (let i = 0; i < count; i++) {
    yield new ShoppingListItem(`Generated item ${i}`)
  }
}
