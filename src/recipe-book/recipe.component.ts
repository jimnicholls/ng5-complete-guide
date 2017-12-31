import { Component, OnInit } from '@angular/core'

import { Recipe, sampleRecipeList } from './recipe.model'


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: [ './recipe.component.css' ],
})
export class RecipeComponent implements OnInit {

  recipe: Recipe = sampleRecipeList[0]

  constructor() { }


  ngOnInit() { }

}
