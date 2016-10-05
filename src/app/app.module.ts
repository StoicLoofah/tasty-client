import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { AppComponent } from './app.component';
import { BookmarkService } from './bookmark.service'
import { DashboardComponent } from './dashboard/dashboard.component';
import { TastyClientRoutingModule } from './app-routing.module';
import { TagEditorComponent } from './tag-editor/tag-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookmarkComponent,
    TagEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TastyClientRoutingModule
  ],
  providers: [
    BookmarkService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
