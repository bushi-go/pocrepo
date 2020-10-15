import { Component, Input, OnInit } from '@angular/core';
import { Poi } from '@pocrepo/model';

@Component({
  selector: 'pocrepo-poi-detail',
  templateUrl: './poi-detail.component.html',
  styleUrls: ['./poi-detail.component.scss']
})
export class PoiDetailComponent implements OnInit {
  @Input() poi: Poi;
  constructor() { }

  ngOnInit(): void {
  }

}
