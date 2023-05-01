import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideListComponent } from './slide-show/slide-list/slide-list.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { SlidePresentorComponent } from './slide-show/slide-presentor/slide-presentor.component';
import { FormsModule, NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideListComponent,
    SlideShowComponent,
    SlidePresentorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
