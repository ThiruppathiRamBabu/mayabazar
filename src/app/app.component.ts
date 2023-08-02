import { Component } from '@angular/core';
import {randomNumberGenerator} from 'babu-random-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mayabazar';
  constructor(){
    console.log('result',randomNumberGenerator(5,50));
  }
}
