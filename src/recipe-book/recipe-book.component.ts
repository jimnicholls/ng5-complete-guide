import { Component, OnInit } from '@angular/core'
import { Recipe, sampleRecipeList } from './recipe.model'



@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: [ './recipe-book.component.css' ],
})
export class RecipeBookComponent implements OnInit {

  RECIPES_I18N_PLURAL_MAPPING: { [_: string]: string } = {
    '=0': 'No recipes',
    '=1': '1 recipe',
    'other': '# recipes',
  }

  recipeList: Recipe[] = []
  selectedRecipe: Recipe|undefined = undefined


  constructor() { }


  ngOnInit() { }


  addSampleData() {
    this.recipeList = [ ...sampleRecipeList ]
  }

}
