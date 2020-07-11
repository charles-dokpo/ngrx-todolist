import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'; 

import { ShoppingReducer, reducer } from './reducers/shopping.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer,
      shopping2 : reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
