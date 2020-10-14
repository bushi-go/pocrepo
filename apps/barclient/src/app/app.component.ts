import { Component } from '@angular/core';
import { AppShellConfig } from '@pocrepo/ui';

@Component({
  selector: 'pocrepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'barclient';
  config: AppShellConfig = {
    logo: "https://emoji.gg/assets/emoji/5937_Doge.png",
    toolbarBgColor: "primary",
    app: "Bar",
    primaryActions:[
        {label: "First action", path: "/", icon: "face", color: "secondary"},
        {label: "Second", path: "/", icon: "home", color: "secondary"}
    ],
    secondaryActions:[
        {label: "First action", path: "/", icon: "face", color: "secondary"},
        {label: "second action", path: "/", icon: "face", color: "secondary"}]
}
}
