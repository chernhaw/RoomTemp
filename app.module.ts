import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {environment}   from '../environments/environment'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowtempComponent } from './showtemp/showtemp.component';
import { ShowrecenttempComponent } from './showrecenttemp/showrecenttemp.component';
import { RecenttempcardComponent } from './recenttempcard/recenttempcard.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowtempComponent,
    ShowrecenttempComponent,
    RecenttempcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),
    AngularFireDatabaseModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
