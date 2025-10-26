import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-jobs.component.html',
  styleUrl: './manage-jobs.component.css'
})
export class ManageJobsComponent {
  jobs = [
    { id: 1, title: 'Frontend Developer', company: 'Techify', location: 'Lahore', type: 'Full-time' },
    { id: 2, title: 'Backend Developer', company: 'CodeWorks', location: 'Islamabad', type: 'Remote' },
  ];

  newJob = { id: 0, title: '', company: '', location: '', type: '' };
  isEditing = false;
  editIndex = -1;

  addJob() {
    if (!this.newJob.title || !this.newJob.company) return;

    if (this.isEditing) {
      this.jobs[this.editIndex] = { ...this.newJob };
      this.isEditing = false;
    } else {
      const newId = this.jobs.length ? Math.max(...this.jobs.map(j => j.id)) + 1 : 1;
      this.jobs.push({ ...this.newJob, id: newId });
    }
    this.newJob = { id: 0, title: '', company: '', location: '', type: '' };
  }

  editJob(index: number) {
    this.isEditing = true;
    this.editIndex = index;
    this.newJob = { ...this.jobs[index] };
  }

  deleteJob(index: number) {
    if (confirm('Delete this job?')) {
      this.jobs.splice(index, 1);
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.newJob = { id: 0, title: '', company: '', location: '', type: '' };
  }

}
