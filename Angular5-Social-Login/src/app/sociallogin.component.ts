/*import {Component, OnInit} from '@angular/core';
import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


//implements OnInit

export class AppComponent  {
 

public userimage; public userName; public userEmail;
public authorized: boolean = false;
//public userimage;

  constructor( private socialAuthService: AuthService ) {} 
  //private user: SocialUser;
  public socialSignIn(socialPlatform : string) {
  	//AppComponent
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        // Now sign-in with userData
        if (userData != null) {
               // console.log(this);
               this.authorized = true;
               this.userimage = userData.image;
               this.userName = userData.name;
               this.userEmail = userData.email;

            }       
      }
    )
  }
  
}
*/