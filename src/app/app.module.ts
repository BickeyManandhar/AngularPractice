import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SignInHistoryComponent } from './sign-in-history/sign-in-history.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //to use [(ngModel)] in input tag in html. also we need to have the same data type in app.component.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
