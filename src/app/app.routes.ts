import { Routes } from '@angular/router';
import { JobPageComponent } from './components/job-page/job-page.component';
import { CandidatePageComponent } from './components/candidate-page/candidate-page.component';
import { CandidateProfilePageComponent } from './components/candidate-profile-page/candidate-profile-page.component';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './components/Admin/auth.guard';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    { path: 'jobs', component: JobPageComponent },
    { path: 'candidates', component: CandidatePageComponent },
    { path: 'candidate/:id', component: CandidateProfilePageComponent },

      // Admin area
  { path: 'admin/login', component: AdminLoginComponent },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'jobs', pathMatch: 'full' },
      { path: 'jobs', loadComponent: () => import('./components/Admin/manage-jobs/manage-jobs.component').then(m => m.ManageJobsComponent) },
      { path: 'candidates', loadComponent: () => import('./components/Admin/manage-candidates/manage-candidates.component').then(m => m.ManageCandidatesComponent) }
    ]
  }  

];
