import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MvactComponent } from './mvact/mvact.component';


const routes: Routes = [
  {path:'landing',component:LandingpageComponent},
  {path:'login', component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'',component:MvactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
