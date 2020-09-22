import { Component, OnInit } from '@angular/core';
import { AlbumbsService } from '../../services/albumbs.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
})

export class ListDetailsComponent implements OnInit {
  data:any;
  datanew: any = []; 
  albumvalue: any;
  searchdata:any;
  constructor(private services: AlbumbsService, private http: HttpClient) { }

    ngOnInit(): void {  
     this.services.getalbums().subscribe(dataone =>{
        this.data = dataone;
     })

  }

      // async fuction for get service method
  /*    async getdata() {
        this.albumvalue = await this.services.getDetails();
      } */
    
       
  

}
