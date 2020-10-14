import { Component } from '@angular/core';
import { AppShellConfig, FooterConfig } from '@pocrepo/ui';

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
footerConfig: FooterConfig = {
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
}
