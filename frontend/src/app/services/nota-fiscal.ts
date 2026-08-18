import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { NotaFiscal, ItemNota } from '../models/models';

@Injectable({ providedIn: 'root' })
export class NotaFiscalService {
  private apiUrl = 'http://localhost:8081/notas-fiscais';

  constructor(private http: HttpClient) {}

  listar(): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(this.apiUrl).pipe(
      timeout(5000),
      catchError(() => of([]))
    );
  }

  buscar(id: number): Observable<NotaFiscal> {
    return this.http.get<NotaFiscal>(`${this.apiUrl}/${id}`);
  }

  criar(itens: ItemNota[]): Observable<any> {
    return this.http.post(this.apiUrl, { itens });
  }

  imprimir(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${id}/imprimir`, {});
  }
}