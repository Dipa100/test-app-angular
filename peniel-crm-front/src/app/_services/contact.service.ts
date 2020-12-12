import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ContactService {


  private URL_CONTACT = 'http://localhost:8080/api/contact';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) { }

  register(contact): Observable<any> {

    return this.http.post(this.URL_CONTACT + '/create', contact,this.httpOptions);
  }

  allContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.URL_CONTACT + '/all');
  }


  findById(contactId: any): Observable<Contact> {
    const urlTo = `${this.URL_CONTACT}/${contactId}`;
    return this.http.get<Contact>(urlTo);
  }
}
