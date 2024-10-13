import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchHttp {
  
  constructor(private http: HttpClient) {}
  ApiURl = "https://localhost:5001/api/"
  
  getAll(): Observable<any> {
    return this.http.get(this.ApiURl + 'itens');
    }

  getItens(params?: any): Observable<any[]> {
    return this.http.get<any[]>(this.ApiURl + 'itens/' + params); // Define o tipo como array
  }
}
