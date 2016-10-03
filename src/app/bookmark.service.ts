import { Injectable } from '@angular/core';

import { Bookmark } from './bookmark';
import { BOOKMARKS } from './mock-bookmarks';

@Injectable()
export class BookmarkService {

  constructor() { }

  getBookmarks(): Bookmark[] {
      return BOOKMARKS;
  }
}
