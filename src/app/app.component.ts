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

}
