import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {AboutJapanComponent} from './about-japan/about-japan.component';
import {AboutItalienComponent} from './about-italien/about-italien.component';
import {TestComponent} from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutJapanComponent,
    AboutItalienComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
        component: AboutJapanComponent
      },
      {
        path: 'about-italien',
        component: AboutItalienComponent
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
