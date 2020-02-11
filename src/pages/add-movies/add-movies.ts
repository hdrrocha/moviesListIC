import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


/**
 * Generated class for the AddMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-movies',
  templateUrl: 'add-movies.html',
  providers: [Camera]
  
})
export class AddMoviesPage {
  img = "";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
     private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMoviesPage');
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
}
