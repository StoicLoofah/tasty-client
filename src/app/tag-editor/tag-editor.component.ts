import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'tag-editor',
  outputs: ['onTagsUpdated'],
  templateUrl: './tag-editor.component.html',
  styleUrls: ['./tag-editor.component.scss']
})
export class TagEditorComponent implements OnInit {
  tags: String[];
  onTagsUpdated: EventEmitter<String[]>;

  constructor() {
    this.onTagsUpdated = new EventEmitter();
  }

  ngOnInit() {
    this.tags = [];
  }

  onKey(event: KeyboardEvent) {
    const value = (<HTMLInputElement>event.target).value;
    if(value.endsWith(',')) {
      const tag = value.substring(0, value.length - 1);
      if(this.tags.indexOf(tag) == -1) {
        this.tags.push(tag);
        this.onTagsUpdated.emit(this.tags);
      }
      (<HTMLInputElement>event.target).value = '';
    }
  }

  removeTag(tag: any) {
    this.tags.splice(this.tags.indexOf(tag), 1);
    this.onTagsUpdated.emit(this.tags);
  }
}
