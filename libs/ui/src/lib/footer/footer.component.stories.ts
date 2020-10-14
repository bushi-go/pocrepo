import { APP_BASE_HREF } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { FooterComponent, FooterConfig } from '../footer/footer.component';
import { UiModule } from '../ui.module';


export default {
  title: 'FooterComponent'
}
const config: FooterConfig = {
    backgroundColor: "primary",
    columns:[
        {
            orientation: "column",
            links: [
                {label: "first link", path:"/" },
                {label: "second link", url:"https://google.com"}
        ]},
        {   orientation: "column",
            links: [
                {label: "first link", path:"/" },
                {label: "second link", url:"https://google.com"}    
        ]},
        {   orientation: "column",
            links: [
                {label: "first link", path:"/" },
                {label: "second link", url:"https://google.com"}    
        ]}
    ]
}

export const primary = () => ({
  moduleMetadata: {
    imports: [MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        RouterModule.forRoot([]),
        MatTabsModule, 
        BrowserModule,
        BrowserAnimationsModule,
        UiModule],
        providers: [{provide: APP_BASE_HREF, useValue : '/' }]
  },
  components: FooterComponent,
  template:`
    <pocrepo-footer [config]="config"></pocrepo-footer> 
  `,
  props: {
      config
  }
})