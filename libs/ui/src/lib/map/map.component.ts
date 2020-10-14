import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'pocrepo-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  map: L.Map;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      this.initMap();
  }

  private initMap(){
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      this.map = L.map('map', {
          center: [48.85333333,2.34888889],
          zoom:18
      })
      tiles.addTo(this.map);
  }
}
