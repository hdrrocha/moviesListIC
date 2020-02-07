import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MovieDetailPage } from '../movie-detail/movie-detail';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Hédie Rocha",
    data: "Janeiro 11, 1992",
    descricao:"Programador, desehador e leitor...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h ago teste"
}
  public page = 1;
  public movies_list = new Array<any>();

  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
    ) {
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  ionViewDidEnter() {
    this.loadMovies(true);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.loadMovies();
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.loadMovies(true);
  }

  closeLoad(){
    this.loader.dismiss();
  }

  initLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes..."
    });
    this.loader.present();
  }

  goToDetail(movie) {
    this.navCtrl.push(MovieDetailPage, {id: movie.id});
  }

  loadMovies(newpage: boolean = false){
    this.initLoading();
    this.movieProvider.getPopularMovies(this.page).subscribe(
      data =>{
          const response = (data as any);
          console.log(response.results);
          
          if(newpage){
            this.movies_list =  this.movies_list.concat(response.results)
              console.log(this.page);
              console.log(this.movies_list);
              
            }else{
              this.movies_list = response.results;
            }

            this.closeLoad();
            if(this.isRefreshing){
                this.refresher.complete();
                this.isRefreshing = false;
      }
          
      }, error => {
          console.log(error);
          
      }
    )
  }
  
}
