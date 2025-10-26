import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate-profile-page',
  imports: [CommonModule],
  templateUrl: './candidate-profile-page.component.html',
  styleUrl: './candidate-profile-page.component.css'
})
export class CandidateProfilePageComponent {
  candidateId: number | null = null;
  candidate: any;

  allCandidates = [
    {
      id: 1,
      name: 'Ahmed Malik',
      role: 'Full Stack Engineer',
      location: 'Lahore, Pakistan',
      photo: 'assets/candidates/ahmed.png',
      matchScore: 92,
      skills: ['Angular', 'Node.js', 'MongoDB', 'Express', 'TypeScript'],
      experience: [
        {
          position: 'Full Stack Developer',
          company: 'Techify Solutions',
          years: '2022 - Present',
          description: 'Developed full MEAN stack applications.'
        }
      ],
      education: [
        { degree: 'BS Computer Science', institution: 'COMSATS', year: '2020 - 2024' }
      ],
      projects: ['SkillSync', 'E-commerce Dashboard']
    },
    {
      id: 2,
      name: 'Sara Khan',
      role: 'Frontend Engineer',
      location: 'Islamabad, Pakistan',
      photo: 'assets/candidates/sara.png',
      matchScore: 87,
      skills: ['React', 'TypeScript', 'Bootstrap', 'Tailwind'],
      experience: [
        {
          position: 'Frontend Developer',
          company: 'PixelHub',
          years: '2021 - Present',
          description: 'Built responsive React UIs.'
        }
      ],
      education: [
        { degree: 'BS Software Engineering', institution: 'NUST', year: '2019 - 2023' }
      ],
      projects: ['UI Kit Library', 'Portfolio Website']
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.candidateId = Number(this.route.snapshot.paramMap.get('id'));
    this.candidate = this.allCandidates.find(c => c.id === this.candidateId);
  }


}
