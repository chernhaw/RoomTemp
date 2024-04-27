import { Component } from '@angular/core';
import { AngularFireDatabase, } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { TempHumidity } from '../temp-humidity';

@Component({
  selector: 'app-showrecenttemp',
  templateUrl: './showrecenttemp.component.html',
  styleUrl: './showrecenttemp.component.css'
})


export class ShowrecenttempComponent  {

  recentData: any;
  recentDataStr =''
  recentDataArray: any =[];
  recentTemp:any = [];

  
  
  //humiditytemp
  tempHumidityPt =''
  
  constructor(private db: AngularFireDatabase) {
    
  }

  ngOnInit(): void {

    this.db.object('sensor/recent').valueChanges().pipe(
      
    ).subscribe((data) => {
      // Handle the data here
      this.recentData = data;
        this.recentDataStr =this.recentData.json
      //  this.recentDataStr = JSON.stringify(this.recentData);
        console.log(this.recentDataStr);
        var recentDataArray=this.recentDataStr.split('|')
   
        
        console.log(recentDataArray)
        // for (var i = 0; i < recentDataArray.length; i++) {
        var date =''
        var temperature =''
        var humidity
        for (let value of recentDataArray) {
            console.log(value);
            
            var dateTemp = value.split("Temp")
            console.log(dateTemp)

            date=dateTemp[0]
            temperature=dateTemp[1]

            
            console.log("Date "+date)
            var tempHumid = value.split("H")

            console.log(tempHumid[1])
            temperature=tempHumid[1]
            humidity=tempHumid[1]

            var tempHumidityJSON = {
              "date":date,
              "temperature":temperature,
              "humidity":humidity
            }

            console.log("Date : "+date + " Temperature : "+temperature +" Humidity : "+humidity)
            this.recentTemp.push(tempHumidityJSON)
          }
         
          

          console.log(this.recentTemp)

        
    }
            
       
    );
    
      
        
        
      


      
  }
  
}

