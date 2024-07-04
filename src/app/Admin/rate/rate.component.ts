import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.css'
})
export class RateComponent {
  rooms = [
    { type: 'Single', deal: 'Family deal', cancellation: 'Strict', dealPrice: 800, rate: 800, availability: '5 rooms' },
    { type: 'Double', deal: 'Christmas deal', cancellation: 'Strict', dealPrice: 1200, rate: 1200, availability: 'Full' },
    { type: 'Triple', deal: 'Family deal', cancellation: 'Flexible', dealPrice: 2000, rate: 2000, availability: '12 rooms' },
    { type: 'VIP', deal: 'Black Friday', cancellation: 'Non refundable', dealPrice: 4000, rate: 4000, availability: '10 rooms' }
  ];

}
