import { Component } from '@angular/core';
import { CalculatorService, LoanCalculationResponse } from '../../services/calculator.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
   grossIncome = 0;
  deductions = 0;

  netIncome = 0;
  maxLoan = 0;
  isEligible = false;
  message = '';
  showResults = false;

  constructor(private calcService: CalculatorService) {}

  calculate() {
    const token = localStorage.getItem('auth_token'); // or wherever your token is stored
    this.calcService.calculateAffordability(this.grossIncome, this.deductions, token || '').subscribe({
      next: (res: LoanCalculationResponse) => {
        this.netIncome = res.netIncome!;
        this.maxLoan = res.maxLoanAmount!;
        this.isEligible = res.eligible!;
        this.message = res.message!;
        this.showResults = true;
      },
      error: (err) => {
        console.error('Loan calculation error', err);
        this.message = 'Failed to calculate loan eligibility. Please try again.';
        this.showResults = true;
      }
    });
  }
}
