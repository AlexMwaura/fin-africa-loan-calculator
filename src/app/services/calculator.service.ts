import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoanCalculationRequest {
  grossIncome: number;
  totalDeductions: number;
}


@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

    private apiUrl = 'http://localhost:8080/api/calculate'; 

  constructor(private http: HttpClient) { }

  calculateAffordability(income: number, deductions: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { income, deductions });
  }
}
