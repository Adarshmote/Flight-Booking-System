import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';
import { FlyInfoService } from './fly-info.service';
import{HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';  
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './local-storage.service';
import { ShowFlightService } from './shared/show-flight/show-flight.service';
import { ScannerService } from './page1/scanner/scanner.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    Page1Module,
    Page2Module,
    HttpClientModule,  
    StorageServiceModule,
    BrowserAnimationsModule,
    LayoutModule 
  ],
  providers: [FlyInfoService, LocalStorageService, ShowFlightService, ScannerService],
  bootstrap: [AppComponent],
})
export class AppModule { }
