import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FirstPageViewComponent } from './first-page-view/first-page-view.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ServicesComponent } from './services/services.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuardService as AuthGuard } from './component-services/auth-guard.service'


const routes: Routes = [
  {path: 'start', component: FirstPageViewComponent,  canActivate: [AuthGuard]},
  {path: 'about', component: AboutMeComponent, canActivate: [AuthGuard]},
  {path: 'service', component: ServicesComponent, canActivate: [AuthGuard]},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: []},
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
