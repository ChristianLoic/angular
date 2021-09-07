import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [
     BrowserModule,
      FormsModule,
     RouterModule.forRoot( [
          


     ]
     ) ],
  declarations: [ AppComponent, HelloComponent ,
    TopBarComponent, ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
