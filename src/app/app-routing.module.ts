import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProfilesComponent } from './Components/profile/profile.component';
import { RepoComponent } from './Components/repo/repo.component';


const routes: Routes = [
{path:'',component: HomeComponent},

{path:'Profiles',component: ProfilesComponent},
{path:'Home', component:HomeComponent},
{path: 'Repositories', component: RepoComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
