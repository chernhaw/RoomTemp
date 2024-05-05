import { Component } from '@angular/core';
import { AngularFireDatabase, } from '@angular/fire/compat/database';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-showtemp',
  templateUrl: './showtemp.component.html',
  styleUrl: './showtemp.component.css'
})
export class ShowtempComponent {
  title = 'myroomtemp';
 

  currentData: any;
  currentDataStr =''
  currentDataArray: any =[];
  currentTemp:any = [];
  backgroundColor = 'cyan';
  emoji ="😀"

  //temp_Humidity_array:TempHumidity[]=[];

  ngOnInit(): void {

    this.db.object('sensor/current').valueChanges().pipe(
      
    ).subscribe((data) => {
      // Handle the data here
      this.currentData = data;
        
      //  this.recentDataStr = JSON.stringify(this.recentData);
       // console.log(this.recentDataStr);
       
   
        
       // console.log(recentDataArray)
        // for (var i = 0; i < recentDataArray.length; i++) {
        // var date = this.currentData.date;
        // var temperature =this.currentData.temperature
        // var humidity=this.currentData.humidity\
        console.log("Current Data")
        console.log("Date "+this.currentData.date)
        console.log("Temperature "+this.currentData.temp)
        console.log("Humidity "+this.currentData.humidity)



        if(parseFloat(this.currentData.temp)==29.0 ){

          this.backgroundColor = '#ffe0cc';
          this.emoji="😐"
    
        } else
        
        if (parseFloat(this.currentData.temp)==30.0){
    
          this.backgroundColor = '#ffc299';
          this.emoji="😐"
    
        }
        
        else
        
        if (parseFloat(this.currentData.temp)==31.0){
    
          this.backgroundColor = '#ffa366';
          this.emoji="🥵"
    
        } else
        if(parseInt(this.currentData.temp)==32.0){
          console.log("set to 32 color" )
          this.backgroundColor = '#ff944d';
          this.emoji="🥵"
        } else if (parseInt(this.currentData.temp)==33){
          console.log("set to 33 color" )
          this.backgroundColor = '#ff8533';
          this.emoji="🥵"
        } else if (parseFloat(this.currentData.temp)==34.0 ){
          this.backgroundColor = '#ff751a';
          this.emoji="🫠"
        } else if (parseFloat(this.currentData.temp)==35.0 ){
          this.backgroundColor = '#ff6600';
          this.emoji="🫠"
        } else if (parseFloat(this.currentData.temperature)>35.0 ){
          this.backgroundColor = '#e65c00';
          this.emoji="🫠"
        }


    })}
  //recentData: Observable<any>;

  constructor(private db: AngularFireDatabase) {
 
   
  }

  


}