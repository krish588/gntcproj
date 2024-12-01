import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { MvactComponent } from './mvact/mvact.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card'
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    LoginComponent,
    ProfileComponent,
    MvactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    DataService,
    // provideAnimationsAsync(),
    // provideFirebaseApp(() => initializeApp({"projectId":"c-mgmt-sys","appId":"1:232928020923:web:4eba2592b6ac76cd2bdc9e","storageBucket":"c-mgmt-sys.appspot.com","apiKey":"AIzaSyB5C0K6lcH-umGEflJoY2f_wAdKTrCCgTs","authDomain":"c-mgmt-sys.firebaseapp.com","messagingSenderId":"232928020923"})),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore())
  
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
