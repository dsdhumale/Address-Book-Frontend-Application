import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = "http://localhost:8080/addressbookservice";

  constructor(private httpClient: HttpClient) { }

  getContactsData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/getall");
  }

  addNewContact(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", body);
  }

  deleteContact(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + id);
  }

  updateContact(id: number, body: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/update/" + id, body);
  }
}
