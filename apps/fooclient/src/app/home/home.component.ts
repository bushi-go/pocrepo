import { Component, EventEmitter, OnInit } from '@angular/core';
import { Poi } from '@pocrepo/model';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PoiService } from '../poi.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { BottomSheetPoiDetailComponent } from '@pocrepo/ui';

@Component({
  selector: 'pocrepo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    selectedPoi: Poi=undefined;
    showPoiDetails=false;
    poiList: Poi[];
    resetMapEmitter= new EventEmitter<boolean>();
    poiBottomSheetDetail: MatBottomSheetRef<BottomSheetPoiDetailComponent>;
  constructor(private poiService: PoiService, private deviceDetector: DeviceDetectorService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
      this.poiService.getAllPoi().subscribe(poiList => {
          this.poiList = poiList;
      })
  }
  onPoiClicked(poi){
      this.selectedPoi = poi;
      this.showPoiDetails=true;
      if(this.isMobileOrTablet){
          this.poiBottomSheetDetail = this._bottomSheet.open(BottomSheetPoiDetailComponent, {data: {poi}, hasBackdrop: false});
          this.poiBottomSheetDetail.afterDismissed().subscribe(()=>this.onDismissPoiDetail());
      }
  }
  onDismissPoiDetail(){
      this.selectedPoi=undefined;
      this.showPoiDetails =false
      this.resetMapEmitter.emit(true);
  }

  isMobileOrTablet(){
      return this.deviceDetector.isMobile() || this.deviceDetector.isTablet();
  }
}
