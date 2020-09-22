import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumbsService {
  // rest api
  private apiurl = 'https://jsonplaceholder.typicode.com/albums';

  asyncResult: any;

  productos: any[] = [];
  cargando: boolean = true;

  constructor(private http: HttpClient) {}

  // observable get method
  getalbums(): Observable<any> {
    return this.http.get(this.apiurl);
  }

  // async and promise for get data
  async getDetails(): Promise<any> {
    return (this.asyncResult = await this.http.get(this.apiurl).toPromise());
  }

  private user = new BehaviorSubject<string>('john');
  private userone = new BehaviorSubject<string>('bagde');
  private city = new BehaviorSubject<string>('pune');

  cast = this.user.asObservable();
  castone = this.userone.asObservable();
  citydetails = this.city.asObservable();

  editUser(newUser) {
    this.user.next(newUser);
  }

  editUserone(lastuser) {
    this.userone.next(lastuser);
  }

  editUsertwo(city) {
    this.city.next(city);
  }
}
