import { Component } from '@angular/core';

import { BookingFormComponent } from '../booking-form/booking-form.component';
import { RouterLink } from '@angular/router';
import { Property } from '../../model/property.model';
import { PROPERTY_DATA } from '../../data/property.data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-listing-page',
  standalone: true,
  imports: [BookingFormComponent,DecimalPipe,RouterLink],
  templateUrl: './listing-page.component.html',
  styleUrl: './listing-page.component.css'
})
export class ListingPageComponent {

  property: Property = PROPERTY_DATA;

}