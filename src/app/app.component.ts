import { Component } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tecnicalTest';

  constructor(
    private mainService: MainService
  ) {
    this.mainService.getContacts()
  }
}
