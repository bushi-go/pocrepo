import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppShellComponent } from './app-shell/app-shell.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { PoiDetailComponent } from './poi-detail/poi-detail.component';

@NgModule({
    imports: [
        CommonModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatButtonModule, 
        MatTabsModule, 
        MatDividerModule, 
        MatMenuModule
    ],
    declarations: [
        AppShellComponent, 
        FooterComponent, 
        MapComponent, 
         PoiDetailComponent
    ],
    exports: [
        AppShellComponent, 
        FooterComponent, 
        MapComponent,
        PoiDetailComponent
    ]
})
export class UiModule { }
