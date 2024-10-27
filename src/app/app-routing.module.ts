import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
<<<<<<< HEAD
  {path:'register',component:RegisterPageComponent}
=======
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'home', component: MainPageComponent },
  { path: '**', redirectTo: 'login' }
>>>>>>> e52d8752473feb3117b70795d1c43613c5e0d076
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
