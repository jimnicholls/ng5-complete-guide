import { BrowserModule } from '@angular/platform-browser'
import { ClarityModule } from 'clarity-angular'
import { NgModule } from '@angular/core'


import { AppComponent } from './app.component'
import { RecipeBookComponent, RecipeComponent } from '../recipe-book'
import { ShoppingListComponent, ShoppingListItemComponent } from '../shopping-list'



@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    RecipeBookComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
