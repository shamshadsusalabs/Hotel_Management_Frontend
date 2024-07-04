import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {


  constructor() {}

  ngOnInit(): void {
    // this.initializeChart();
  }

  initializeChart(): void {
    const ctx = (document.getElementById('occupancyChart') as HTMLCanvasElement).getContext('2d');
  //   const myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //       datasets: [{
  //         label: 'Occupancy Rate',
  //         data: [65, 59, 80, 81, 56, 55, 40],
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

}

}
