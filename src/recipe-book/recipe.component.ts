import { Component, HostListener, OnInit, ViewChild } from '@angular/core'

import { Recipe, sampleRecipeList } from './recipe.model'


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: [ './recipe.component.css' ],
})
export class RecipeComponent implements OnInit {

  recipe: Recipe = sampleRecipeList[0]

  @ViewChild('deleteConfirmationContent') deleteConfirmationContent: any

  constructor() { }

  ngOnInit() { }

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
