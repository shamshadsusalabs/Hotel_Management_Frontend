import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private apiUrl = 'https://hotelmanagement-y3t0.onrender.com';

  constructor(private http: HttpClient) {}

  // Register a new user
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/register`, user);
  }

  // Login a user
  login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/login`, credentials, { withCredentials: true });
  }

  // Logout a user
  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users/logout`, {}, { withCredentials: true });
  }

  // Get all users
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/users`);
  }

  // Get user by ID
  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${id}`);
  }

  // Update a user
  updateUser(id: string, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/users/${id}`, user);
  }

  // Delete a user
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }

}
