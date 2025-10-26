import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) { }

  login() {
    const adminEmail = 'admin@skillsync.com';
    const adminPassword = 'admin123';

    if (this.email === adminEmail && this.password === adminPassword) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      this.router.navigate(['/admin/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }

}
