import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Bookmark } from '../bookmark';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {
  bookmark: Bookmark;

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.bookmark = new Bookmark();
    this.route.params.forEach((params: Params) => {
      const id = params['id'];
      this.bookmarkService.getBookmark(id)
        .then(bookmark => this.bookmark = bookmark);
    });
  }

  saveBookmark(title, url, notes) {
    this.bookmarkService.update(this.bookmark).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  updateTags(tags) {
    this.bookmark.tags = tags;
  }

}
