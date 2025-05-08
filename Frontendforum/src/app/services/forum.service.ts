import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forum } from '../models/Forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private apiUrl = 'http://localhost:9000/api/forums';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Forum[]> {
    return this.http.get<Forum[]>(this.apiUrl);
  }

  getById(id: string): Observable<Forum> {
    return this.http.get<Forum>(`${this.apiUrl}/${id}`);
  }

  create(forum: Forum): Observable<Forum> {
    return this.http.post<Forum>(this.apiUrl, forum);
  }

  update(id: string, forum: Forum): Observable<Forum> {
    return this.http.put<Forum>(`${this.apiUrl}/${id}`, forum);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
