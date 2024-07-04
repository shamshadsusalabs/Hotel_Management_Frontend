import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserserviceService } from '../../_service/-userservice.service';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  currentDate!: Date;

  constructor(private fb: FormBuilder, private userService: UserserviceService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      keepLoggedIn: [false]
    });

    this.currentDate = new Date();
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Display SweetAlert loader
      Swal.fire({
        title: 'Logging in...',
        allowOutsideClick: false
      });
      Swal.showLoading(); // Show loading spinner

      // Call login service
      this.userService.login({ email, password }).subscribe(
        (response) => {
          console.log('Login successful:', response);

          // Close SweetAlert on success
          Swal.close();

          // Navigate to a different route on successful login
          this.router.navigate(['/Admin']);
        },
        (error) => {
          console.error('Login failed:', error);

          // Close SweetAlert on error
          Swal.fire({
            icon: 'error',
            title: 'Login failed',
            text: 'Please check your credentials and try again.'
          });
        }
      );
    }
  }
}
