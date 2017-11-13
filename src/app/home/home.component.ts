import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  template: `<h3>{{ message }}</h3>`
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor(meta: Meta, title: Title) {

    title.setTitle('My Spiffy Home Page');

    meta.addTags([
      { name: 'author',   content: 'fabernovel code'},
      { name: 'keywords', content: 'angular seo, angular meta'},
      { name: 'description', content: 'SEO friendly Angular app with server side rendering' }
    ]);
  }

  ngOnInit() {
    this.message = 'Hello';
  }
}
