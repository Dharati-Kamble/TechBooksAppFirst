import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  technologies: string[] = [
    'Angular',
    'Node JS',
    'Android',
    'Big Data',
    'Artificial Intelligence',
  ];
}
