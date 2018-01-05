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

  selectedRecipe: Recipe | null = null


  ngOnChanges(changes: SimpleChanges) {
    if (this.selectedRecipe !== null && 'recipeBook' in changes && !this.recipeBook.includes(this.selectedRecipe)) {
      this.selectedRecipe = null
    }
  }


  onRecipeClosed() {
    this.selectedRecipe = null
  }

}
