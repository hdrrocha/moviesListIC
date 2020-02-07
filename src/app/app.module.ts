import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPageModule } from '../pages/intro/intro.module';
// import { FeedPageModule } from '../pages/feed/feed.module';
import { FeedPage } from '../pages/feed/feed';

import { MovieProvider } from '../providers/movie/movie';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { MovieDetailPageModule } from '../pages/movie-detail/movie-detail.module';



@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    // MovieDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    HttpClientModule,
    MovieDetailPageModule
    // FeedPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    // MovieDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
  ]
})
export class AppModule {}
