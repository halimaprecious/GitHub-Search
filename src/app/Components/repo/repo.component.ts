import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/Services/profile.service';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  users: any =[]
  repos:any =[];
  username!:string;

  constructor(private profileService: ProfileService) { 
    this.profileService.getProfile().subscribe(users=>{
      this.users = users
      })
      this.profileService.getRepo().subscribe(repos=>{
        this.repos = repos
        })
    }
  // callback
   searchInfo(){
    //  this.profileService.updateUser(this.username)
    // this.profileService.getProfile().subscribe(users=>{
    //   this.users = users
    //   })
    this.profileService.updateRepo(this.repos)
      this.profileService.getRepo().subscribe(repos=>{
        this.repos = repos
        })
   }
   ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}


  

