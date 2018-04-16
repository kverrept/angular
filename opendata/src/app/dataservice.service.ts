import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { Izwembaden } from './zwembaden/Izwembaden';
import { HttpClient } from '@angular/common/http';
import { Ijeugehuizen } from './jeugdhuizen/ijeugehuizen';

@Injectable()
export class DataserviceService {

  private zwembaden:Izwembaden[];
  private jeugdhuizen:Ijeugehuizen[];

  constructor(private http:HttpClient) { }

    public Getzwembaden(){
      return this.http.get("http://datasets.antwerpen.be/v1/buurtmonitor/openingstijden_zwembad.json");
  }
  public GetZiekenhuizen() {
    return this.http.get("");
  }
  public GetJeugdhuizen(){
    return this.http.get("http://datasets.antwerpen.be/v4/gis/jeugdhuisoverzicht.json");
}
  
}
