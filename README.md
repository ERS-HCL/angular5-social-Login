# Angular5 Social Login Facebook and Google 
It is a Angular 5 social login project after login user date is populating, here I have used the angular5-social-login plug-in to authenticate social login.

<p align="center">
    <img  alt="Angular5 Social Login" src="img/Angular5-Social-Login.png" class="img-responsive">
</p>

To preview demo of Angular5 Social Login project, [click here](https://stackblitz.com/edit/angular5-social-login?embed=1&file=index.html&hideExplorer=1&hideNavigation=1&view=preview)

## Getting Started
Download  or Clone the repository in your machine and run following command.

### Installing
    - npm install

### Run server
    - ng serve
    

## Below are the steps for who want to write by own


### Install via npm 

```sh
npm install --save angular5-social-login
```

### Import the module

In `app.module.ts`,

```javascript
...

import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";


// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
	      provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
	      provider: new GoogleLoginProvid("Your-Google-Client-Id")
        },
      ];
  );
  return config;
}

@NgModule({
  imports: [
    ...
    SocialLoginModule
  ],
  providers: [
    ...
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [...]
})

export class AppModule { }

```

### Usage : 

In `app.component.ts`,

```javascript
import {Component, OnInit} from '@angular/core';
import {
    AuthService,
    SocialUser,
    FacebookLoginProvider,
    GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//implements OnInit

export class AppComponent {
 
	private user: SocialUser;
  public authorized: boolean = false;


  constructor( private socialAuthService: AuthService ) {}
  
  public socialSignIn(socialPlatform : string) {  

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
               this.authorized = true;
               this.user = userData;               
            }       
      }
    );
  }
//for signout the application
  public signOut(){
          this.socialAuthService.signOut();
          this.authorized = false;
      }
  
}

```



In `app.component.html`,

```html
<section class="jumbotron text-center">
   <div class="container">
   	<div *ngIf="authorized; then proData else login"></div>
  <ng-template #login>
    <h2 class="jumbotron-heading marginBottom">Facebook and Google Social login</h2>
    <br/>
	  <p class="lead text-muted marginBottom">Please sign in</p>
	  <p>
	  	<button (click)="socialSignIn('facebook')" class="btn btn-primary my-2">Sign in with Facebook</button>
		<button (click)="socialSignIn('google')" class="btn btn-primary my-2">Signin in with Google</button>  
	</p>
 </ng-template>  

 <ng-template #proData>
 	<h4 class="marginBottom">My {{user.provider}} profile</h4>
 	<br/>
  <img src="{{user.image}}" class="marginBottom">
<div class="marginBottom">
  <h4>{{user.name}}</h4>
  <p>{{user.email}}</p>
</div> 
<button class="btn btn-danger" (click)="signOut()">Sign out</button>
 </ng-template>
 </div>
</section>              
```



### Facebook App Id : 

You need to create your own app by going to [Facebook Developers](https://developers.facebook.com/) page.
Add `Facebook login` under products and configure `Valid OAuth redirect URIs`.

### Google Client Id : 

Follow this official documentation on how to [
Create a Google API Console project and client ID](https://developers.google.com/identity/sign-in/web/devconsole-project).


