import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { UiModule } from '@pocrepo/ui';
import {MatSidenavModule} from '@angular/material/sidenav';
import {PoiService} from './poi.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const ROUTES = [{path:"", component: HomeComponent}];

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MatSidenavModule,
    HttpClientModule,
    UiModule
  ],
  entryComponents:[],
  providers: [PoiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
