import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poi } from '@pocrepo/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoiService {
  private API = "/api/poi"
  constructor(private httpClient: HttpClient) {}

  getAllPoi(): Observable<Poi[]>{
      return this.httpClient.get<Poi[]>(this.API);
  }
}
