import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showNavigationIndicators = true;

  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationIndicators = true;
    config.showNavigationArrows = false;
  }
}
