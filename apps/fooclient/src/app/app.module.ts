import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MapComponent, UiModule } from '@pocrepo/ui';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const ROUTES = [{path:"", component: MapComponent}];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    UiModule
  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
