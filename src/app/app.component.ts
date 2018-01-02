import { Component } from '@angular/core'
import { Recipe, makeSampleRecipeList } from '../recipe-book'
import { ShoppingListItem, makeSampleShoppingList } from '../shopping-list'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {

  recipeBook: Recipe[] = [ ]

  shoppingList: ShoppingListItem[] = [ ]


  loadSampleData() {
    this.recipeBook = makeSampleRecipeList()
    this.shoppingList = makeSampleShoppingList()
  }


  onShoppingListItemAdded(newItem: ShoppingListItem) {
    if (this.shoppingList.findIndex(_1 => _1.description === newItem.description) === -1) {
      this.shoppingList.push(newItem)
    } else {
      console.log('new item is already in the shopping list') // TODO: Alert user
    }
  }


  onShoppingListCleared() {
    this.shoppingList = [ ]
  }

}
