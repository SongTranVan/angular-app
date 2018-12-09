import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from './models/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private postUri = 'https://tranquil-lake-48038.herokuapp.com/posts';

  constructor(private httpService: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.httpService.get<Post[]>(this.postUri);
  }

  public addNewPost(post: Post): Observable<Post>{
    return this.httpService.post<Post>(this.postUri,post, httpOptions);
  }

  public editPost(post: Post): Observable<Post>{
    return this.httpService.put<Post>(this.postUri + '/' + post.id, post, httpOptions);
  }

  public getPostById(id): Observable<Post> {
    return this.httpService.get<Post>(this.postUri + '/' + id);
  }

  public deletePost(id): Observable<any> {
    return this.httpService.delete<any>(this.postUri + '/' + id);
  }
}
