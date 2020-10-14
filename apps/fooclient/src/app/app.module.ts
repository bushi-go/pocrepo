import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiModule } from '@pocrepo/ui';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path:"", component: HomeComponent}]),
    UiModule
  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
