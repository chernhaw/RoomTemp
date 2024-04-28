import { Component,Input } from '@angular/core';
import { TempHumidity } from '../temp-humidity';


@Component({
  selector: 'app-recenttempcard',
  templateUrl: './recenttempcard.component.html',
  styleUrl: './recenttempcard.component.css'
})
export class RecenttempcardComponent {

  backgroundColor = 'cyan';

  ngOnInit(): void {

    console.log(parseFloat(this.tempHumidity.temperature))

    if(parseFloat(this.tempHumidity.temperature)==29.0 ){

      this.backgroundColor = '#ffe0cc';


    } else
    
    if (parseFloat(this.tempHumidity.temperature)==30.0){

      this.backgroundColor = '#ffc299';


    }
    
    else
    
    if (parseFloat(this.tempHumidity.temperature)==31.0){

      this.backgroundColor = '#ffa366';


    } else
    if(parseInt(this.tempHumidity.temperature)==32.0){
      console.log("set to 32 color" )
      this.backgroundColor = '#ff944d';
    } else if (parseInt(this.tempHumidity.temperature)==33){
      console.log("set to 33 color" )
      this.backgroundColor = '#ff8533';
    } else if (parseFloat(this.tempHumidity.temperature)==34.0 ){
      this.backgroundColor = '#ff751a';
    } else if (parseFloat(this.tempHumidity.temperature)==35.0 ){
      this.backgroundColor = '#ff6600';
    } else if (parseFloat(this.tempHumidity.temperature)>35.0 ){
      this.backgroundColor = '#e65c00';
    }

  }

  @Input() tempHumidity!:TempHumidity;

}
