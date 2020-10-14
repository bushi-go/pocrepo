import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppShellComponent } from './app-shell/app-shell.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatTabsModule, MatDividerModule],
  declarations: [AppShellComponent, FooterComponent],
  exports: [AppShellComponent, FooterComponent]
})
export class UiModule {}
