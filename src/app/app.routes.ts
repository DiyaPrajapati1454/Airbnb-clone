import { Routes } from '@angular/router';

import { ListingPageComponent } from '../component/listing-page/listing-page.component';
import { PhotoTour } from '../component/photo-tour/photo-tour.component';

export const routes: Routes = [
  {
    path: '',
    component: ListingPageComponent
  },
  {
    path: 'photo-tour',
    component: PhotoTour
  }
];