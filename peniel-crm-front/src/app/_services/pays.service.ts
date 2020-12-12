import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from '../models/pays.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PaysService {

  private URL_PAYS = 'http://localhost:8080/api/pays';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }


  allPays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(this.URL_PAYS + '/all');
  }

}
