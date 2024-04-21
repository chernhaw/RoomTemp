import { Component,Input } from '@angular/core';
import { TempHumidity } from '../temp-humidity';
import { ShowrecenttempComponent } from '../showrecenttemp/showrecenttemp.component';

@Component({
  selector: 'app-recenttempcard',
  templateUrl: './recenttempcard.component.html',
  styleUrl: './recenttempcard.component.css'
})
export class RecenttempcardComponent {

  @Input() humiditytemp!:String[] 

  
}
