import { APP_BASE_HREF } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { UiModule } from '../ui.module';
import { AppShellComponent, AppShellConfig } from './app-shell.component';


export default {
  title: 'AppShellComponent'
}

const config: AppShellConfig = {
    logo: "https://emoji.gg/assets/emoji/3239_pokerface.png",
    toolbarBgColor: "primary",
    app: "Poker Face",
    primaryActions:[
        {label: "First action", path: "/", icon: "face", color: "secondary"},
        {label: "Second", path: "/", icon: "icon", color: "secondary"}
    ],
    secondaryActions:[
        {label: "First action", path: "/", icon: "face", color: "secondary"},
        {label: "second action", path: "/", icon: "face", color: "secondary"}]
} 

export const primary = () => ({
  moduleMetadata: {
    imports: [
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        RouterModule.forRoot([]), 
        MatTabsModule, 
        BrowserModule,
        BrowserAnimationsModule, 
        UiModule],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
   },
  component: AppShellComponent,
  template:`
        
        <pocrepo-app-shell [config]="config">
            <div> Test content </div>
        </pocrepo-app-shell>
        
    `,
  props: {
      config 
  }
})