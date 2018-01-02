import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

import { Recipe } from './recipe.model'



@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: [ './recipe-book.component.css' ],
})
export class RecipeBookComponent implements OnChanges {

  RECIPES_I18N_PLURAL_MAPPING: { [_: string]: string } = {
    '=0': 'No recipes',
    '=1': '1 recipe',
    'other': '# recipes',
  }


  @Input() recipeBook: Recipe[]

  selectedRecipe: Recipe | undefined = undefined


  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedRecipe && changes.hasOwnProperty('recipeBook') && !this.recipeBook.includes(this.selectedRecipe)) {
      this.selectedRecipe = undefined
    }
  }


  onRecipeClosed() {
    this.selectedRecipe = undefined
  }

}
