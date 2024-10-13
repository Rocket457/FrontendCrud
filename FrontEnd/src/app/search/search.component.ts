// search.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>(); // Evento que será emitido para o AppComponent

  // Método chamado quando o valor de input mudar
  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.searchTerm = target.value;
      this.searchEvent.emit(this.searchTerm); // Emite o evento de pesquisa
    }
  }
}
