import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Poi } from '@pocrepo/model';
import * as L from 'leaflet';

@Component({
  selector: 'pocrepo-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    private _poiList:Poi[];

    @Input() private resetMapEventEmitter: EventEmitter<boolean>;

    @Input() set poiList(poiList:Poi[]){
    this._poiList = poiList;
    if(this._poiList){
        this.initMap(this._poiList);
      }
  }



  @Output() poiClicked: EventEmitter<Poi> = new EventEmitter<Poi>();
  map: L.Map;
  constructor() { }
   

  ngOnInit(): void {
      if(this.resetMapEventEmitter){
      this.resetMapEventEmitter.subscribe(()=> this.resetMap());
    }
  }

  private initMap(poiList: Poi[]){
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      this.map = L.map('map', {
          center: this.calculateCenter(poiList),
          zoom:10,
      })
      tiles.addTo(this.map);
      poiList.map(poi => L.marker(this.getPoiCoordinates(poi), {icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'assets/marker-icon.png',
        shadowUrl: 'assets/marker-shadow.png'
        })})
      ).map(mark => mark.on('click', (event) => this.onMarkerClik(event,this.map,this._poiList)).addTo(this.map));
  }

  calculateCenter(poiList: Poi[]): L.LatLngExpression{
    const centerLong = poiList.map(poi => parseFloat(poi.coordinates.longitude)).reduce((acc, curr)=> acc+curr)/poiList.length;
    const centLat =  poiList.map(poi => parseFloat(poi.coordinates.latitude)).reduce((acc, curr)=> acc+curr)/poiList.length; 
    return [centLat, centerLong]
  }

  getPoiCoordinates(poi:Poi): L.LatLngExpression{
      return [parseFloat(poi.coordinates.latitude), parseFloat(poi.coordinates.longitude)]
  }

  onMarkerClik(event,map: L.Map, poiList){
      const lng = event.latlng.lng;
      const lat = event.latlng.lat;
      const poi = poiList.find(candidate => parseFloat(candidate.coordinates.longitude) === lng && parseFloat(candidate.coordinates.latitude) === lat);
      this.poiClicked.emit(poi);;
      map.flyTo(event.latlng, 12);
  }

  resetMap(){
      this.map.flyTo(this.calculateCenter(this._poiList), 10);
  }
}
