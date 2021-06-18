import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private subject = new Subject<any>();

  constructor() { }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
