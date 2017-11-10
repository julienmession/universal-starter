import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const CONFIG_KEY = makeStateKey('config');

@Component({
  selector: 'app-root',
  template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <p>My Json config loaded from my /api express route (see server.js)</p>
  {{ config | json }}
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  
  private config: any;
 
  // Inject HttpClient into your component or service.
  constructor(
    private http: HttpClient,
    private state: TransferState
  ) {}
 
  ngOnInit(): void {

    this.config = this.state.get(CONFIG_KEY, null as any);

    if (!this.config) {
      // Make the HTTP request:
      this.http.get('/api/items').subscribe(data => {
        // Read the result field from the JSON response.
        this.config = data;
        this.state.set(CONFIG_KEY, data as any);
        console.log(data);
      });
    }
  }
}
