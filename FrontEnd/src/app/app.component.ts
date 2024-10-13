import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create_button/create_button.component';
import { SearchComponent } from "./search/search.component";
import { FetchHttp } from './fetch.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, CreateComponent, ReadComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  produtos: any[] = [];
  loading: boolean = true;

  constructor(private fetchHttp: FetchHttp, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.getAll(); // Carrega todos os produtos inicialmente
  }

  getAll() {
    this.loading = true;
    this.fetchHttp.getAll().subscribe({
      next: (data) => {
        this.produtos = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro:', error);
        this.loading = false;
      },
    });
  }

  getProdutos(searchTerm?: string) {
    this.loading = true;
    this.fetchHttp.getItens(searchTerm).subscribe({
      next: (data) => {
        this.produtos = [data];
        this.loading = false;
        this.cdr.detectChanges()
      },
      error: (error) => {
        console.error('Erro:', error);
        this.loading = false;
      },
    });
  }

  // Método chamado quando o evento de pesquisa é emitido pelo SearchComponent
  onSearchTriggered(searchTerm: string) {
    if (searchTerm == ''){
      return this.getAll()
    }
    this.getProdutos(searchTerm);
  }
}
