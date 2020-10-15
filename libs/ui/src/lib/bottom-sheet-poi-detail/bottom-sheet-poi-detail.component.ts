import { Component, Inject, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'pocrepo-bottom-sheet-poi-detail',
  templateUrl: './bottom-sheet-poi-detail.component.html',
  styleUrls: ['./bottom-sheet-poi-detail.component.scss']
})
export class BottomSheetPoiDetailComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetPoiDetailComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  ngOnInit(): void {

  }
  onDismissBottomSheet(){
      this._bottomSheetRef.dismiss();
  }
}
