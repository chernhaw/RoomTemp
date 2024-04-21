import { Component } from '@angular/core';

import { AngularFireDatabase, } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
   
  
})



export class AppComponent {
  title = 'myroomtemp';
  sensorData : Observable<any>;
  recentData: Observable<any>;

  constructor(private db: AngularFireDatabase) {
    //this.items = db.list('items').valueChanges();
    this.sensorData = db.object('sensor/current').valueChanges();
    this.recentData = db.object('sensor/recent').valueChanges();

    
  }

}

