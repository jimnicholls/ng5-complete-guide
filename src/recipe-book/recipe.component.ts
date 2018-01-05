import { Component, EventEmitter, Input, Output } from '@angular/core'

import { Recipe } from './recipe.model'
import { SignpostContentComponent } from '../clarityui-utils/signpost/signpost-content.component'



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: [ './recipe.component.css' ],
})
export class RecipeComponent {

  @Input() recipe: Recipe

  @Output() closed = new EventEmitter<Recipe>()


  onCloseClicked() {
    this.closed.emit(this.recipe)
  }


  onDeleteConfirmed(appSignpostContent: SignpostContentComponent) {
    appSignpostContent.isOpen = false
    console.warn('Delete recipe not implemented')
  }

}
