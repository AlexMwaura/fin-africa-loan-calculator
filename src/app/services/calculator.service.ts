import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoanCalculationRequest {
  grossIncome: number;
  totalDeductions: number;
}
export interface LoanCalculationResponse {
  netIncome: number;
  maxLoanAmount: number;
  eligible: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

    private apiUrl = 'http://localhost:8089/api/v1/loan-calculator/calculate'; 

  constructor(private http: HttpClient) { }


calculateAffordability(
  grossIncome: number,
  totalDeductions: number,
  token?: string
): Observable<LoanCalculationResponse> {
  const request: LoanCalculationRequest = { grossIncome, totalDeductions };

  const headers = token?.trim()
    ? new HttpHeaders({ Authorization: `Bearer ${token.trim()}` }) // ✅ cleanly formatted
    : undefined;

  return this.http.post<LoanCalculationResponse>(this.apiUrl, request, { headers });
}

}
