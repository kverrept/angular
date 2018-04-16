import { Component, OnInit } from '@angular/core';
import { Ijeugehuizen } from './ijeugehuizen';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-jeugdhuizen',
  templateUrl: './jeugdhuizen.component.html',
  styleUrls: ['./jeugdhuizen.component.css']
})
export class JeugdhuizenComponent implements OnInit {

  jeugdhuizen: any[];
  constructor(private dataservice:DataserviceService) { 
    this.dataservice.GetJeugdhuizen().subscribe(data=>{
      console.log(data.jeugdhuizen[1]);
    })
  }

  ngOnInit() {
  }

}
