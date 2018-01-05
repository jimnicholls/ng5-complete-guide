import { BrowserModule } from '@angular/platform-browser'
import { ClarityModule } from 'clarity-angular'
import { NgModule } from '@angular/core'


import { AppComponent } from './app.component'
import { RecipeBookComponent, RecipeComponent } from '../recipe-book'
import { ShoppingListComponent } from '../shopping-list'
import { SignpostContentComponent } from '../clarityui-utils/signpost/signpost-content.component'
import { SignpostCancelDirective } from '../clarityui-utils/signpost/signpost-cancel.directive'
import { SignpostDefaultFocusDirective } from '../clarityui-utils/signpost/signpost-default-focus.directive'
import { SignpostResetFormDirective } from '../clarityui-utils/signpost/signpost-reset-form-directive'



@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeComponent,
    SignpostCancelDirective,
    SignpostContentComponent,
    SignpostDefaultFocusDirective,
    SignpostResetFormDirective,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
