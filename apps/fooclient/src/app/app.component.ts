import { Component } from '@angular/core';
import { AppShellConfig } from '@pocrepo/ui';

@Component({
  selector: 'pocrepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
      config: AppShellConfig = {
        logo: "https://emoji.gg/assets/emoji/3239_pokerface.png",
        toolbarBgColor: "primary",
        app: "Foo",
        primaryActions:[
            {label: "First action", path: "/", icon: "face", color: "secondary"},
            {label: "Second action", path: "/", icon: "home", color: "secondary"}
        ],
        secondaryActions:[
            {label: "First action", path: "/", icon: "face", color: "secondary"},
            {label: "second action", path: "/", icon: "face", color: "secondary"}]
    } 
}
