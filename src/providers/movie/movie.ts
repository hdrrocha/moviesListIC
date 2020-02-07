import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseApiPath = "https://api.themoviedb.org/3";
  
  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getPopularMovies(page = 1){
      return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }

  getLatestMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/latest?page=${page}&api_key=` + this.getApiKey());
  }
  
  getTopRatedMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/top_rated?page=${page}&api_key=` + this.getApiKey());
  }
  
  getMovieDetails(movieId){
    return this.http.get(this.baseApiPath + `/movie/${movieId}?api_key=` + this.getApiKey());
  }

  getApiKey(): string{
    return "537efd456d89df3e3b125310d8039acd";
  }

}
