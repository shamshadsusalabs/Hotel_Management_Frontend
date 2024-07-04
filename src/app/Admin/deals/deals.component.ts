import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  deals = [
    { referenceNumber: '#5644', dealName: 'Family deal', reservationsLeft: 10, endDate: '21/3/23', roomType: 'VIP', status: 'Ongoing' },
    { referenceNumber: '#6112', dealName: 'Christmas deal', reservationsLeft: 12, endDate: '25/3/23', roomType: 'Single, Double', status: 'Full' },
    { referenceNumber: '#6141', dealName: 'Family deal', reservationsLeft: 15, endDate: '-', roomType: 'Triple', status: 'Inactive' },
    { referenceNumber: '#6535', dealName: 'Black Friday', reservationsLeft: 10, endDate: '1/5/23', roomType: 'VIP', status: 'New' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
