import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { ZwembadenComponent } from './zwembaden/zwembaden.component';
import { DataserviceService } from './dataservice.service'
import { DuplicatePipe } from './zwembaden/DuplicatePipe';
import { JeugdhuizenComponent } from './jeugdhuizen/jeugdhuizen.component'


@NgModule({
  declarations: [
    AppComponent,
    ZwembadenComponent,
    JeugdhuizenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
