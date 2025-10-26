import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.css'
})
export class JobPageComponent {
  searchTerm = '';
  selectedCategory = '';
  page = 1;
  pageSize = 6;

  categories = ['Frontend', 'Backend', 'Full Stack', 'Design', 'Marketing'];

  jobs = [
    {
      title: 'Frontend Developer',
      company: 'Techify',
      companyLogo: 'assets/logos/techify.png',
      description: 'Build and maintain responsive web interfaces using Angular and Bootstrap.',
      location: 'Lahore, Pakistan',
      category: 'Frontend'
    },
    {
      title: 'Backend Developer',
      company: 'CodeWorks',
      companyLogo: 'assets/logos/codeworks.png',
      description: 'Work with Node.js and MongoDB to create robust APIs.',
      location: 'Karachi, Pakistan',
      category: 'Backend'
    },
    {
      title: 'UI/UX Designer',
      company: 'DesignHub',
      companyLogo: 'assets/logos/designhub.png',
      description: 'Design modern, user-friendly web and mobile app interfaces.',
      location: 'Remote',
      category: 'Design'
    },
    {
      title: 'Full Stack Engineer',
      company: 'SkillSync',
      companyLogo: 'assets/logos/skillsync.png',
      description: 'Join our team to develop end-to-end web solutions for skill-based hiring.',
      location: 'Islamabad, Pakistan',
      category: 'Full Stack'
    }
  ];

  filteredJobs() {
    return this.jobs
      .filter(j =>
        j.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        j.company.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
      .filter(j => (this.selectedCategory ? j.category === this.selectedCategory : true))
      .slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  nextPage() {
    if (this.page * this.pageSize < this.jobs.length) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

}
