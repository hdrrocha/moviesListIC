import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
  providers: [MovieProvider]
})
export class MovieDetailPage {
  public movie;
  public movieId;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public movieProvider: MovieProvider
  ) {
  }

  ionViewDidLoad() {
    this.movieId = this.navParams.get("id");
    console.log('ionViewDidLoad this.movieId => ' + this.movieId);
    this.movieProvider.getMovieDetails(this.movieId).subscribe(
      data => {
        const response = (data as any);
        this.movie = response
      }, error => {
        console.error(error)   
      }
    )
  }

}
