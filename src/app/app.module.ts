import { BrowserModule } from '@angular/platform-browser'
import { ClarityModule } from 'clarity-angular'
import { NgModule } from '@angular/core'


import { AppComponent } from './app.component'
import { RecipeBookComponent, RecipeComponent } from '../recipe-book'
import { ShoppingListComponent } from '../shopping-list'



@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
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
