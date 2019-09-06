import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRScannerComponent } from './qrscanner/qrscanner.component';
import { HomeComponent } from './home/home.component';
import { AppUiModule } from './app-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    QRScannerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
