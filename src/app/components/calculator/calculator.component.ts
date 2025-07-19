import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
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
    this.calcService.calculateAffordability(this.grossIncome, this.deductions).subscribe(res => {
      this.netIncome = res.netIncome;
      this.maxLoan = res.maxLoan;
      this.isEligible = res.eligible;
      this.message = res.message;
      this.showResults = true;
    });
  }
}
