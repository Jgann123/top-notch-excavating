import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private emailApiUrl = 'YOUR_MAILTHIS_API_URL';

  constructor(private http: HttpClient) { }

  postForm(formData: any): Observable<any> {
    return this.http.post<any>(this.emailApiUrl, formData);
  }
}
