import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {

  name = '';
  email = '';
  phone = '';
  date = '';
  time = '';

  submitted = false;

  submitRequest(): void {

    this.submitted = true;

    console.log('Tour Request:', {
      name: this.name,
      email: this.email,
      phone: this.phone,
      date: this.date,
      time: this.time
    });
  }
}