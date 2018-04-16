import { Component, OnInit } from '@angular/core';
import { Izwembaden } from './Izwembaden';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-zwembaden',
  templateUrl: './zwembaden.component.html',
  styleUrls: ['./zwembaden.component.css']
})
export class ZwembadenComponent implements OnInit {

  ziekenhuizen: Izwembaden[];
  openingstijden:any[];
  constructor(private dataservice:DataserviceService) { 
    this.dataservice.Getzwembaden().subscribe(
      data=>{
        console.log(data.openingstijden_zwembad[1]);
        this.openingstijden = data.openingstijden_zwembad

    });
  }

  ngOnInit() {
  }

}
