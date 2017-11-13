import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    // .withServerTransition allows Universal to replace the HTML it generated on its own.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpClientModule,
    BrowserTransferStateModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    
  }
}
