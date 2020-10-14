import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterConfig } from '@pocrepo/ui';
import { DeviceDetectorService } from 'ngx-device-detector';


export interface AppShellConfig{
  app?: string;
  logo: string;
  toolbarBgColor: "primary" | "secondary" | "accent";
  primaryActions: ToolBarAction[];
  secondaryActions: ToolBarAction[];
}

export interface ToolBarAction{
  icon?: string;
  label: string;
  color: "primary" | "secondary" | "accent";
  path: string;
}

@Component({
  selector: 'pocrepo-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {
  @Input() config: AppShellConfig;
  @Input() footerConfig: FooterConfig;
  showMenu=false;
  constructor(private deviceDetector: DeviceDetectorService, private router: Router) { }

  ngOnInit(): void {
    // TODO : add control on config
  }

  isMobileOrTablet(){
    return this.deviceDetector.isMobile() || this.deviceDetector.isTablet();
  }

  navigate(path){
    this.router.navigate([path]);
  }

  showSecondaryMenu(){
      this.showMenu = !this.showMenu;
  }
}
