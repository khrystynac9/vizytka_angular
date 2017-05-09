import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {AboutJapanComponent} from './about-japan/about-japan.component';
import {AboutItalienComponent} from './about-italien/about-italien.component';
import {TestComponent} from './test/test.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutJapanComponent,
    AboutItalienComponent,
    TestComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path:'about-japan',
        component: AboutItalienComponent
      },
      {
        path: 'about-italien',
        component: AboutItalienComponent
      },
      {
        path: 'about-ukraine',
        component: AboutItalienComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'test',
        component: TestComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
