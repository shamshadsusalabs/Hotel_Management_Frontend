import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Reservation {
  id: string;
  name: string;
  roomNumber: string;
  totalAmount: number;
  amountPaid: number;
  status: string;
}
@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.css'
})
export class GuestComponent {
  reservations: Reservation[] = [
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: 467, amountPaid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: 645, amountPaid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: 686, amountPaid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: 8413, amountPaid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: 841, amountPaid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: 684, amountPaid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: 984, amountPaid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: 984, amountPaid: 600, status: 'Dirty' },
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: 467, amountPaid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: 645, amountPaid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: 686, amountPaid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: 8413, amountPaid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: 841, amountPaid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: 684, amountPaid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: 984, amountPaid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: 984, amountPaid: 600, status: 'Dirty' },
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: 467, amountPaid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: 645, amountPaid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: 686, amountPaid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: 8413, amountPaid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: 841, amountPaid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: 684, amountPaid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: 984, amountPaid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: 984, amountPaid: 600, status: 'Dirty' },
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: 467, amountPaid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: 645, amountPaid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: 686, amountPaid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: 8413, amountPaid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: 841, amountPaid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: 684, amountPaid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: 984, amountPaid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: 984, amountPaid: 600, status: 'Dirty' },
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: 467, amountPaid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: 645, amountPaid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: 686, amountPaid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: 8413, amountPaid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: 841, amountPaid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: 684, amountPaid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: 984, amountPaid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: 984, amountPaid: 600, status: 'Dirty' },
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: 467, amountPaid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: 645, amountPaid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: 686, amountPaid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: 8413, amountPaid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: 841, amountPaid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: 684, amountPaid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: 984, amountPaid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: 984, amountPaid: 600, status: 'Dirty' },
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: 467, amountPaid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: 645, amountPaid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: 686, amountPaid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: 8413, amountPaid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: 841, amountPaid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: 684, amountPaid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: 984, amountPaid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: 984, amountPaid: 600, status: 'Dirty' },
    { id: '#5644', name: 'Alexander', roomNumber: 'A647', totalAmount: 467, amountPaid: 200, status: 'Clean' },
    { id: '#6112', name: 'Pegasus', roomNumber: 'A456', totalAmount: 645, amountPaid: 250, status: 'Dirty' },
    { id: '#6141', name: 'Martin', roomNumber: 'A645', totalAmount: 686, amountPaid: 400, status: 'Dirty' },
    { id: '#6535', name: 'Cecil', roomNumber: 'A684', totalAmount: 8413, amountPaid: 2500, status: 'Inspected' },
    { id: '#6541', name: 'Luke', roomNumber: 'B464', totalAmount: 841, amountPaid: 400, status: 'Clean' },
    { id: '#9846', name: 'Yadrin', roomNumber: 'C648', totalAmount: 684, amountPaid: 300, status: 'Clean' },
    { id: '#4921', name: 'Kiand', roomNumber: 'D644', totalAmount: 984, amountPaid: 513, status: 'Pick up' },
    { id: '#9841', name: 'Turen', roomNumber: 'B641', totalAmount: 984, amountPaid: 600, status: 'Dirty' },
  ];

  currentPage: number = 1;
  pageSize: number = 5;
  pagesPerSet: number = 5;
  currentPageSet: number = 0;
  visiblePages: number[] = [];

  ngOnInit() {
    this.updateVisiblePages();
  }

  get totalPages() {
    return Math.ceil(this.reservations.length / this.pageSize);
  }

  get paginatedReservations() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.reservations.slice(start, start + this.pageSize);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updateVisiblePages();
  }

  updateVisiblePages() {
    const startPage = this.currentPageSet * this.pagesPerSet + 1;
    const endPage = Math.min(startPage + this.pagesPerSet - 1, this.totalPages);
    this.visiblePages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  prevPageSet() {
    if (this.currentPageSet > 0) {
      this.currentPageSet--;
      this.updateVisiblePages();
      this.currentPage = this.visiblePages[this.visiblePages.length - 1];
    }
  }

  nextPageSet() {
    if ((this.currentPageSet + 1) * this.pagesPerSet < this.totalPages) {
      this.currentPageSet++;
      this.updateVisiblePages();
      this.currentPage = this.visiblePages[0];
    }
  }
}
