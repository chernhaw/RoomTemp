import { Component } from '@angular/core';
import { AngularFireDatabase, } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showrecenttemp',
  templateUrl: './showrecenttemp.component.html',
  styleUrl: './showrecenttemp.component.css'
})


export class ShowrecenttempComponent  {

  recentData: any;
  recentDataStr =''
  recentDataArray=[]
  
  constructor(private db: AngularFireDatabase) {
    
  }

  ngOnInit(): void {
    this.db.object('sensor/recent').valueChanges()
      .subscribe((snapshot) => {
        this.recentData = snapshot;
        this.recentDataStr =this.recentData.json
      //  this.recentDataStr = JSON.stringify(this.recentData);
        console.log(this.recentDataStr);
        var recentDataArray=this.recentDataStr.split('|')
        console.log(recentDataArray);

        const match = recentDataArray[0].match(/(\d+\.\d+)/);
        console.log(match);

        // Output the data
      });


      
  }
  
}

