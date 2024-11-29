import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: string[] = [
    'Introduction to Algorithms',
    'Clean Code',
    'Design Patterns',
    'Artificial Intelligence: A Modern Approach',
    'Big Data: Principles and Best Practices',
  ];
}
