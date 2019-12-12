import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  loadedFeature = 'officer';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
}
}
