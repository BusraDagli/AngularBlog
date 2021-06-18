import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Contacts } from '../_models/Contacts';
import { UserComments } from '../_models/userComments';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private apiUrlContacts = 'http://localhost:3000/contacts';
  private apiUrlComments = 'http://localhost:3000/comments';
  private subject = new Subject<any>();
  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
  getContacts(): Observable<Contacts[]> {
    return this.http.get<Contacts[]>(this.apiUrlContacts);
  }
  saveContact(contact: Contacts):Observable<Contacts>{
    return this.http.post<Contacts>(this.apiUrlContacts, JSON.stringify(contact), httpOptions);
  }

  getComments(): Observable<UserComments[]> {
    return this.http.get<UserComments[]>(this.apiUrlComments);
  }
  saveComments(comment: UserComments):Observable<UserComments>{
    return this.http.post<UserComments>(this.apiUrlComments, JSON.stringify(comment), httpOptions);
  }
}
