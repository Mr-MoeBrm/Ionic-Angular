import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


const httpOptions={
  headers: new HttpHeaders({
    'content-type':'application/json',
  })
} 

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl = environment.apiUrl+'/api/Shopper';

  constructor(private http : HttpClient) { }
  getOrder(TrackingNumber : number) : Observable<any[]> {
    const Url = `${this.apiUrl}/getDetails?orderId=${TrackingNumber}`;
    return this.http.get<any[]>(Url,httpOptions);
  }
}
