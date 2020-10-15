import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetPoiDetailComponent } from './bottom-sheet-poi-detail.component';

describe('BottomSheetPoiDetailComponent', () => {
  let component: BottomSheetPoiDetailComponent;
  let fixture: ComponentFixture<BottomSheetPoiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetPoiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetPoiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
