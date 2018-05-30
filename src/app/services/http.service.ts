import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mountain } from '../models/mountain';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getMountains(queryParams = {}): Observable<any> {
    const params = new HttpParams()
      .set('params', JSON.stringify(queryParams));
    return this.httpClient.get(`${this.apiUrl}/mountains`, {params});
  }

  public getCount(queryParams = {}): Observable<any> {
    const params = new HttpParams()
    .set('params', JSON.stringify(queryParams));
    return this.httpClient.get(`${this.apiUrl}/count`, {params});
  }

  public getMountain(id): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/mountains/${id}`);
  }

}
