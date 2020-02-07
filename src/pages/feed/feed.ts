import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
    ) {
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.loadMovies(true);
  }

  loadMovies(newpage: boolean = false){
  
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data =>{
          const response = (data as any);
          console.log(response.results);
          // const objeto_retorno = JSON.parse(response.results);

          this.movies_list =  this.movies_list.concat(response.results)

          console.log(this.page);
          console.log(this.movies_list);
          
      }, error => {
          console.log(error);
          
      }
    )
  }
  
}
