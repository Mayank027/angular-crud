import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from './post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private HttpClient: HttpClient) { }

  getAll(): Observable<any>  {
    return this.HttpClient.get(this.apiUrl + '/posts/')
  }

  create(post: Post): Observable<any>{
    return this.HttpClient.post(this.apiUrl + '/posts/', JSON.stringify(post), this.httpOptions)
  }

  find(id: number): Observable<any> {
    return this.HttpClient.get(this.apiUrl + '/posts/' + id)
  }

  update(id: number, post: Post): Observable<any> {
    return this.HttpClient.put(this.apiUrl + '/posts/' + id, JSON.stringify(post), this.httpOptions)
  }

  delete(id: number){
    return this.HttpClient.delete(this.apiUrl + '/posts/' + id, this.httpOptions)
  }
}
