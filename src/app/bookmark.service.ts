import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bookmark } from './bookmark';
import { BOOKMARKS } from './mock-bookmarks';
import { SERVER_URL } from './secrets';


@Injectable()
export class BookmarkService {

  private bookmarksUrl = SERVER_URL + 'bookmarks';

  constructor(private http: Http) { }

  getBookmarks(): Promise<Bookmark[]> {
    // return Promise.resolve(BOOKMARKS);
    return this.http.get(this.bookmarksUrl)
              .toPromise()
              .then(response => response.json() as Bookmark[])
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
