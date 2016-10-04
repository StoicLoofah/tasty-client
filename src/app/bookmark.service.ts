import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bookmark } from './bookmark';
import { BOOKMARKS } from './mock-bookmarks';
import { SERVER_URL } from './secrets';


@Injectable()
export class BookmarkService {

  private bookmarksUrl = SERVER_URL + 'bookmarks';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getBookmarks(): Promise<Bookmark[]> {
    // return Promise.resolve(BOOKMARKS);
    return this.http.get(this.bookmarksUrl)
              .toPromise()
              .then(response => response.json() as Bookmark[])
              .catch(this.handleError);
  }

  create(data: Object): Promise<Bookmark> {
    return this.http.post(this.bookmarksUrl, JSON.stringify(data), {headers: this.headers})
              .toPromise()
              .then(res => res.json().data)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
