import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  rooms = [
    { number: '#001', bedType: 'Double bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Available' },
    { number: '#002', bedType: 'Single bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#003', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#004', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#005', bedType: 'Single bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#006', bedType: 'Double bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Waitlist' },
    { number: '#007', bedType: 'Double bed', floor: 'Floor - 3', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#008', bedType: 'Single bed', floor: 'Floor - 5', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Blocked' },
    { number: '#001', bedType: 'Double bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Available' },
    { number: '#002', bedType: 'Single bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#003', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#004', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#005', bedType: 'Single bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#006', bedType: 'Double bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Waitlist' },
    { number: '#007', bedType: 'Double bed', floor: 'Floor - 3', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#008', bedType: 'Single bed', floor: 'Floor - 5', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Blocked' },
    { number: '#001', bedType: 'Double bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Available' },
    { number: '#002', bedType: 'Single bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#003', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#004', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#005', bedType: 'Single bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#006', bedType: 'Double bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Waitlist' },
    { number: '#007', bedType: 'Double bed', floor: 'Floor - 3', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#008', bedType: 'Single bed', floor: 'Floor - 5', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Blocked' },
    { number: '#001', bedType: 'Double bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Available' },
    { number: '#002', bedType: 'Single bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#003', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#004', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#005', bedType: 'Single bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#006', bedType: 'Double bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Waitlist' },
    { number: '#007', bedType: 'Double bed', floor: 'Floor - 3', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#008', bedType: 'Single bed', floor: 'Floor - 5', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Blocked' },
    { number: '#001', bedType: 'Double bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Available' },
    { number: '#002', bedType: 'Single bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#003', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#004', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#005', bedType: 'Single bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#006', bedType: 'Double bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Waitlist' },
    { number: '#007', bedType: 'Double bed', floor: 'Floor - 3', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#008', bedType: 'Single bed', floor: 'Floor - 5', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Blocked' },
    { number: '#001', bedType: 'Double bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Available' },
    { number: '#002', bedType: 'Single bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#003', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#004', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#005', bedType: 'Single bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#006', bedType: 'Double bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Waitlist' },
    { number: '#007', bedType: 'Double bed', floor: 'Floor - 3', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#008', bedType: 'Single bed', floor: 'Floor - 5', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Blocked' },
    { number: '#001', bedType: 'Double bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Available' },
    { number: '#002', bedType: 'Single bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#003', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Booked' },
    { number: '#004', bedType: 'VIP', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#005', bedType: 'Single bed', floor: 'Floor - 1', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#006', bedType: 'Double bed', floor: 'Floor - 2', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Waitlist' },
    { number: '#007', bedType: 'Double bed', floor: 'Floor - 3', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Reserved' },
    { number: '#008', bedType: 'Single bed', floor: 'Floor - 5', facility: 'AC, shower, Double bed, towel bathtub, TV', status: 'Blocked' },
    // Add more data as needed...
  ];

  currentPage = 1;
  itemsPerPage = 5;

  get paginatedRooms() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.rooms.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.rooms.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get pages() {
    const pageCount = this.totalPages;
    const pages = [];
    const visiblePages = 7;
    const halfVisible = Math.floor(visiblePages / 2);

    let startPage = this.currentPage - halfVisible;
    let endPage = this.currentPage + halfVisible;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(visiblePages, pageCount);
    }

    if (endPage > pageCount) {
      endPage = pageCount;
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }
}
