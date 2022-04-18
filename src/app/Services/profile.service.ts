import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient} from '@angular/common/http';
import { map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // base_url = "https://api.github.com";
  username:string;
  user!:User;
  repos!:any;

  constructor(private http:HttpClient) { 
    this.username ='halimaprecious';

  }
  // github profile
  getProfile(){
    return this.http.get('https://api.github.com/users/' + this.username)
    .pipe(map(result => result));
  }
// gets repositories
  getRepo(){
    return this.http.get('https://api.github.com/users/' + this.username +'/repos')
    .pipe(map(result => result));
  }
  // updates user data
  updateUser(username:string){
    this.username =username;
      }
}

