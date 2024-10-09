import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router:Router) { }

  // login method
  login(email : string,password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['profile']);
    }, err =>{
      alert('something went wrong');
      this.router.navigate(['/login']);
    })
  }

  //sign out
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    },err =>{
        alert(err.message);
    })
  }
}
