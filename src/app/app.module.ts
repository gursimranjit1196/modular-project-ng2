import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Injectable} from '@angular/core';
import { Routes, RouterModule, CanActivate, CanLoad } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//routes
import { appRoutes } from './app.routes';

// Services
import { MemberService } from './modules/member/member.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
