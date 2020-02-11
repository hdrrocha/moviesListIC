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
import { AddMoviesPage } from '../pages/add-movies/add-movies';
import { FeedPage } from '../pages/feed/feed';

import { MovieProvider } from '../providers/movie/movie';
// import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { MovieDetailPageModule } from '../pages/movie-detail/movie-detail.module';
// import { AddMoviesPageModule } from '../pages/add-movies/add-movies.module';
import { ConfigProvider } from '../providers/config/config';





@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    AddMoviesPage
    // MovieDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    HttpClientModule,
    MovieDetailPageModule,
    // AddMoviesPageModule
    // FeedPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    FeedPage,
    AddMoviesPage
    // MovieDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    ConfigProvider
  ]
})
export class AppModule {}
