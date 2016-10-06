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
  filteringTagNames: string[] = [];

  constructor(private bookmarkService: BookmarkService) { }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks().then(bookmarks => {
      this.bookmarks = bookmarks;
      this.updateTags(bookmarks);
    });
  }

  filteredBookmarks() {
    if(this.bookmarks) {
      return this.bookmarks.filter(bookmark => {
        for(var i in this.filteringTagNames) {
          const tagName = this.filteringTagNames[i];
          if(bookmark.tags.indexOf(tagName) == -1) {
            return false;
          }
        }
        return true;
      });
    }
    return [];
  }

  ngOnInit() {
    this.getBookmarks();
  }

  toggleFilter(tag: Tag) {
    const tagName = tag.name;
    const index = this.filteringTagNames.indexOf(tagName);
    if(index == -1) {
      this.filteringTagNames.push(tagName);
    } else {
      this.filteringTagNames.splice(index, 1)
    }
  }

  updateTags(bookmarks: Bookmark[]) {
    var tagNameSet = {};
    bookmarks.forEach(bookmark => {
      bookmark.tags.forEach(tag => {
        tagNameSet[tag] = 1;
      });
    });

    var tagNames = [];
    for(var name in tagNameSet) {
      tagNames.push(name);
    }
    tagNames.sort();
    this.tags = tagNames.map(name => {return {name: name};});
  }

}
