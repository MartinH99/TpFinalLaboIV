
/* Dependencies */
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components */
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MusicPlaybackComponent } from './components/music-playback/music-playback.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterPageComponent,
    ProfilePageComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent,
    MusicPlaybackComponent,
    ForgotPasswordComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
