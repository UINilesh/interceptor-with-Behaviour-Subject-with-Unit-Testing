import { Component, OnInit } from '@angular/core';
import { AlbumbsService } from '../../services/albumbs.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  constructor(private myservice:AlbumbsService) { }

  user:string;
  lastname:string;
  city:string;

  ngOnInit(): void {
    this.myservice.cast.subscribe(user=> 
    this.user = user);

    this.myservice.castone.subscribe(lastname =>
    this.lastname = lastname);

    this.myservice.citydetails.subscribe(city =>
    this.city = city);

  }

}
