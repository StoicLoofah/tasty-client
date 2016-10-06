import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookmarkService } from '../bookmark.service.ts';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  tags: string[];

  constructor(
    private bookmarkService: BookmarkService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submitForm(title, url, notes) {
    if(url.value && title.value) {
      this.add(title.value, url.value, notes.value);
      title.value = '';
      url.value = '';
      notes.value = '';
    }
  }

  add(title, url, notes) {
    this.bookmarkService.create({
      title,
      url,
      notes,
      tags: this.tags,
    }).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  updateTags(tags) {
    this.tags = tags;
  }
}
