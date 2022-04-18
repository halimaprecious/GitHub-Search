import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Components/home/home.component';
import { ProfilesComponent } from '../Components/profile/profile.component';
import { RepoComponent } from '../Components/repo/repo.component';
import { RouterModule,Routes} from '@angular/router';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'Profiles',component: ProfilesComponent},
  {path:'Home', component:HomeComponent},
  {path: 'Repositories', component: RepoComponent},];


@NgModule({
  declarations: [],

  imports:  [RouterModule.forRoot(routes),CommonModule,],
  exports: [RouterModule, MyRouterModule]
    
  
})
export class MyRouterModule { }
