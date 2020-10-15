import { Component, OnInit } from '@angular/core';
import { Poi } from '@pocrepo/model';
import { PoiService } from '../poi.service';

@Component({
  selector: 'pocrepo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    selectedPoi: Poi=undefined;
    showPoiDetails=false;
    poiList: Poi[];
  constructor(private poiService: PoiService) { }

  ngOnInit(): void {
      this.poiService.getAllPoi().subscribe(poiList => {
          this.poiList = poiList;
      })
  }
  onPoiClicked(poi){
      this.selectedPoi = poi;
      this.showPoiDetails=true;
  }
  onDismissDrawer(){
      this.selectedPoi=undefined;
      this.showPoiDetails =false
  }
}
