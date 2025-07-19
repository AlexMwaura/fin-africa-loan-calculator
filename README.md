# 💰 Fin Africa Affordability Calculator

A simple, elegant affordability calculator for Fin Africa that helps determine loan eligibility based on a user's monthly income and deductions.

![UI Screenshot](./assets/screenshot.png)

---

## 🚀 Overview

This calculator is part of Fin Africa's loan prequalification tool. Users input their gross monthly income and deductions, and the calculator returns:

- ✅ Net Income
- 💸 Maximum Affordable Loan (50% of Net Income)
- 📊 Loan Eligibility Status
- 🧠 Friendly Explanation Message

---

## 🎯 Features

- Clean and modern UI inspired by [Fin Africa](https://fin.africa) and LeadingSalons layout
- Responsive design (desktop + mobile)
- Real-time backend calculation
- Eligibility feedback & breakdown
- Built with Angular 18 + Spring Boot

---

## ⚙️ Technologies Used

### Frontend
- [Angular 18](https://angular.io/)
- TypeScript
- SCSS
- Responsive HTML + CSS
- RxJS
- Angular Forms

### Backend
- [Spring Boot](https://spring.io/projects/spring-boot)
- Java 17+
- RESTful API
- CORS configured

---

## 🧪 Sample Calculation Logic

```ts
netIncome = grossIncome - deductions;
maxLoan = 0.5 * netIncome;
eligible = maxLoan >= 20000;
