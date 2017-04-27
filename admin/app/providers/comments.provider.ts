import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { GlobalConstants } from '../app/app.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentProvider {
  headers : Headers;
  options : RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  getComments() {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/comments')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getCommentById(commentId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/comment/' + commentId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getCommentByAuthor(authorId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/comments/author/' + authorId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  getCommentByTarget(targetId) {
    return new Promise(resolve => {
      this.http.get(GlobalConstants.urlServer + '/comments/target/' + targetId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  postComment(comment) {
    return new Promise(resolve => {
      this.http.post(GlobalConstants.urlServer + '/comment', comment)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

  putComment(comment) {
    return new Promise(resolve => {
      this.http.put(GlobalConstants.urlServer + '/comment', comment)
        .map(res => res.json())
        .subscribe(data => resolve(data));
    });
  }

  deleteComment(commentId) {
    return new Promise(resolve => {
      this.http.delete(GlobalConstants.urlServer + '/comment/' + commentId)
        .map(res => res.json())
        .subscribe(data => {resolve(data);});
    });
  }

}

