import { Component, OnInit } from '@angular/core';

import { Bookmark } from '../bookmark.ts';
import { BookmarkService } from '../bookmark.service.ts';
import { Tag } from '../tag.ts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bookmarks: Bookmark[];
  tags: Tag[] = [];

  constructor(private bookmarkService: BookmarkService) { }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks().then(bookmarks => this.bookmarks = bookmarks);
  }

  ngOnInit() {
    this.getBookmarks();
    this.tags = [
        {name: 'Entertainment'},
        {name: 'News'},
        {name: 'Tech'}
    ];
  }

}
