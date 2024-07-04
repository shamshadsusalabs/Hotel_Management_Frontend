import { Routes } from '@angular/router';

export const routes: Routes = [


  {

    path: '',
    loadComponent: () => import('./Authentication/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'Admin',
    loadComponent: () => import('./Admin/admin-dashboard/admin-dashboard.component').then(c => c.AdminDashboardComponent),
    children: [
      {
        path: '',
        redirectTo: 'main-content',
        pathMatch: 'full'
      },
      {
        path: 'main-content',
        loadComponent: () => import('./Admin/main-component/main-component.component').then(c => c.MainComponentComponent)
      },
      {
        path: 'front-desk',
        loadComponent: () => import('./Admin/front-desk/front-desk.component').then(c => c.FrontDeskComponent)
      },
      {
        path: 'Guest',
        loadComponent: () => import('./Admin/guest/guest.component').then(c => c.GuestComponent)
      },
      {
        path: 'Room',
        loadComponent: () => import('./Admin/room/room.component').then(c => c.RoomComponent)
      },
      {
        path: 'Deal',
        loadComponent: () => import('./Admin/deals/deals.component').then(c => c.DealsComponent)
      },
      {
        path: 'Rate',
        loadComponent: () => import('./Admin/rate/rate.component').then(c => c.RateComponent)
      }
    ]
  }
];
