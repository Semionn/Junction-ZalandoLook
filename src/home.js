import {inject} from 'aurelia-framework';
import {initialize} from 'aurelia-pal-browser';
import {AuthService} from './auth-service';
import {IgService} from './ig-service';
initialize();

@inject(AuthService, IgService)
export class Home {
  heading = "Welcome to Scotch IG";
  token = localStorage.getItem('token');
  recent = [{"url": "https://scotch.io/wp-content/uploads/2016/06/QFjcXTrPSwCffGwtDrTJ_build-a-mini-instagram-app-with-aurelia.png"}];
  post_images = [];

  constructor(authService, igService){
    this.authService = authService;
    this.igService = igService;
  }

  sigin() {
    this.authService.sigin();
  }

  signout() {
    this.authService.signout();
  }

  activate() {
    // if(this.token){
      // return this.igService.recent()
      //   .then(res => res.response.data)
      //   .then(recent =>
      //     {
      //       this.recent = recent
      //     });
    // }
  }
}
