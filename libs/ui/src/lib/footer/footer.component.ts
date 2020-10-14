import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface FooterConfig{
    backgroundColor: "primary" | "secondary" | "accent" | "warn";
    columns: FooterColumn[];
}

export interface FooterColumn{
    orientation: "column" | "row";
    links: FooterLink[];
}

export interface FooterLink{
    label: string;
    image?: string;
    path?: string;
    url?: string;
}
@Component({
  selector: 'pocrepo-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() config: FooterConfig;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(path){
      console.log("Navigated to "+path);
      this.router.navigate([path]);
  }
}
