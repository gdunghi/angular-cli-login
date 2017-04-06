import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
// import { fakeBackendProvider } from './fakebackend/fake-backend';
// import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
 
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


import { AuthGuard } from './guards/AuthGuard';
import { AuthenticationService } from './shared/authenticationService';
import { UserService } from './shared/userService';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,

    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }