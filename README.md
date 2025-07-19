```markdown
# 💰 Fin Africa Loan Affordability Calculator – Frontend

This is the **Angular frontend** application for the Fin Africa loan affordability calculator. It allows users to input their monthly income and deductions to determine loan eligibility — connected to a secure Spring Boot backend via JWT-protected APIs.

---

## 🚀 Overview

The application provides:

- ✅ Net Income calculation
- 💸 Maximum Affordable Loan (50% of Net Income)
- 📊 Loan Eligibility Status
- 🧠 Friendly Explanation Message

> 🔐 This frontend connects to a secure Spring Boot backend via JWT-based authentication.

---

## 🎯 Features

- Built with **Angular 18 standalone components**
- Clean, modern UI loosely aligned with [Fin Africa branding](https://fin.africa)
- Responsive design (mobile-friendly)
- Real-time communication with the backend
- JWT-secured API calls using stored token
- Clean architecture and modular structure

---

## ⚙️ Technologies Used

- Angular 18 (Standalone Components)
- TypeScript
- SCSS
- Angular Forms
- Angular HTTP Client
- RxJS

---

## 🧱 Architecture

### Component Overview

| Component              | Purpose                                           |
|------------------------|---------------------------------------------------|
| `CalculatorComponent`  | Core UI for input, results, and form handling     |
| `CalculatorService`    | Communicates with the Spring Boot backend         |
| `AppComponent`         | Root of the application, loads the calculator     |

---

## 📁 Project Structure

```

affordability-calculator/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── calculator/
│   │   │       ├── calculator.component.ts
│   │   │       ├── calculator.component.html
│   │   │       └── calculator.component.scss
│   │   ├── services/
│   │   │   └── calculator.service.ts
│   │   └── app.component.ts / .html
│   └── styles/
│       └── (global styles / variables)
├── angular.json
├── package.json
├── tsconfig.json
└── README.md

````

---

## 🧪 Sample Calculation Logic

```ts
netIncome = grossIncome - totalDeductions;
maxLoan = 0.5 * netIncome;
eligible = maxLoan >= 20000;
````

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

* Node.js `v18+`
* Angular CLI `v18+`
* Spring Boot backend running at `http://localhost:8089`

---

### ▶️ Run the App Locally

1. Clone this repo:

```bash
git clone https://github.com/AlexMwaura/fin-africa-loan-calculator-frontend.git
cd fin-africa-loan-calculator-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the dev server:

```bash
ng serve
```

4. Access the app in your browser:

```
http://localhost:4200
```

---

### 🔐 Authentication

1. Authenticate via the backend login endpoint:

   ```http
   POST /api/v1/auth/login
   ```
2. Copy the JWT token from the response.
3. Save it in localStorage:

   ```js
   localStorage.setItem('auth_token', '<your-token>');
   ```
4. All calculator API calls will automatically include the token as:

   ```
   Authorization: Bearer <token>
   ```

---

## 💡 Future Enhancements

* Add login screen with JWT storage
* Auto redirect on token expiry
* UI loader while fetching results
* Validation and error message handling
* Deploy to Vercel / Netlify

---

## 👨‍💻 Author

**Alex Mwangi Mwaura**
[LinkedIn](https://www.linkedin.com/in/alex-mwaura-562419119/)
[GitHub](https://github.com/AlexMwaura)

---

## 📄 License

MIT License

