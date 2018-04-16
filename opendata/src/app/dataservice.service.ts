import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Izwembaden } from './zwembaden/Izwembaden';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataserviceService {

  private zwembaden:Izwembaden[];

  constructor(private http:HttpClient) { }

    public Getzwembaden(){
      return this.http.get("http://datasets.antwerpen.be/v1/buurtmonitor/openingstijden_zwembad.json");
    
  }

}
