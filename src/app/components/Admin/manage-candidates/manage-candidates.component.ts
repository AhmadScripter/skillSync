import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-candidates',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-candidates.component.html',
  styleUrl: './manage-candidates.component.css'
})
export class ManageCandidatesComponent {
  candidates = [
    { id: 1, name: 'Ahmad Jutt', role: 'Frontend Developer', experience: '1 year', skills: 'Angular, Bootstrap' },
    { id: 2, name: 'Ali Khan', role: 'Backend Developer', experience: '2 years', skills: 'Node.js, MongoDB' },
  ];

  newCandidate = { id: 0, name: '', role: '', experience: '', skills: '' };
  isEditing = false;
  editIndex = -1;

  addCandidate() {
    if (!this.newCandidate.name || !this.newCandidate.role) return;

    if (this.isEditing) {
      this.candidates[this.editIndex] = { ...this.newCandidate };
      this.isEditing = false;
    } else {
      const newId = this.candidates.length ? Math.max(...this.candidates.map(c => c.id)) + 1 : 1;
      this.candidates.push({ ...this.newCandidate, id: newId });
    }
    this.newCandidate = { id: 0, name: '', role: '', experience: '', skills: '' };
  }

  editCandidate(index: number) {
    this.isEditing = true;
    this.editIndex = index;
    this.newCandidate = { ...this.candidates[index] };
  }

  deleteCandidate(index: number) {
    if (confirm('Delete this candidate?')) {
      this.candidates.splice(index, 1);
    }
  }

  cancelEdit() {
    this.isEditing = false;
    this.newCandidate = { id: 0, name: '', role: '', experience: '', skills: '' };
  }

}
