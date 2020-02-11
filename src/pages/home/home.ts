import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MovieDetailPage } from '../movie-detail/movie-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MovieProvider]
})
export class HomePage {

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
    console.log('ionViewDidLoad HomePage');
  }

  ionViewDidEnter() {
    this.loadTopRateMovies(true);
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.loadTopRateMovies();
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.loadTopRateMovies(true);
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

  loadTopRateMovies(newpage: boolean = false){
    this.initLoading();
    this.movieProvider.getTopRatedMovies(this.page).subscribe(
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
          this.isRefreshing = false;
          console.log(error);
          
      }
    )
  }
}
