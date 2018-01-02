import { Component, HostListener, Input, ViewChild } from '@angular/core'

import { Recipe } from './recipe.model'


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: [ './recipe.component.css' ],
})
export class RecipeComponent {

  @Input() recipe: Recipe

  @ViewChild('deleteConfirmationContent') deleteConfirmationContent: any

  onDeleteConfirmationCancel() {
    this.deleteConfirmationContent.close()
  }

  onDeleteConfirmationDelete() {
    this.deleteConfirmationContent.close()
    alert('Not implemented yet')
  }

  @HostListener('document:keydown.escape')
  onEscapeKeydown() {
    if (this.deleteConfirmationContent && this.deleteConfirmationContent.ifOpenService.open) {
      this.deleteConfirmationContent.close()
    }
  }

}
