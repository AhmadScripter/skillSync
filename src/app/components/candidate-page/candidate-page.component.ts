import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-candidate-page',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './candidate-page.component.html',
  styleUrl: './candidate-page.component.css'
})
export class CandidatePageComponent {
  searchTerm = '';
  selectedCategory = '';
  page = 1;
  pageSize = 6;

  categories = ['Frontend', 'Backend', 'Full Stack', 'Designer', 'Marketing'];

  candidates = [
    {
      id: 1,
      name: 'Ali Raza',
      role: 'Frontend Developer',
      location: 'Lahore, Pakistan',
      skills: ['Angular', 'Bootstrap', 'TypeScript'],
      photo: 'assets/candidates/ali.png',
      matchScore: 88,
      category: 'Frontend'
    },
    {
      id: 2,
      name: 'Sara Khan',
      role: 'Backend Developer',
      location: 'Karachi, Pakistan',
      skills: ['Node.js', 'Express', 'MongoDB'],
      photo: 'assets/candidates/sara.png',
      matchScore: 75,
      category: 'Backend'
    }
  ];

  filteredCandidates() {
    return this.candidates
      .filter(c =>
        c.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        c.skills.some(s => s.toLowerCase().includes(this.searchTerm.toLowerCase()))
      )
      .filter(c => (this.selectedCategory ? c.category === this.selectedCategory : true))
      .slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
  }

  nextPage() {
    if (this.page * this.pageSize < this.candidates.length) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

}
