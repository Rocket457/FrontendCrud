import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrl: './read.component.css',
})

export class ReadComponent {
  @Input() produtos: any[] = [];
  @Input() loading: boolean = true; 
}
