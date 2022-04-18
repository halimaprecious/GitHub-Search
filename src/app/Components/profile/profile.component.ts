import { ProfileService } from './../../Services/profile.service';
import { Component, OnInit } from '@angular/core';
// import { User } from 'src/app/user';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: any=[];
  repos:any =[];
  username!:string;

  constructor(private profileService:ProfileService ) { 
  this.profileService.getProfile().subscribe(users=>{
    this.users = users
    })
    this.profileService.getRepo().subscribe(repos=>{
      this.repos = repos
      })

    }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  }
