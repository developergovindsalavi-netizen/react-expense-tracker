# Expense Tracker

A responsive personal finance tracking application built with React.

The application allows users to manage income and expense transactions,
search and filter records, edit and delete transactions, persist data
using browser localStorage, and analyze financial activity through
monthly reports and interactive charts.

---

## 🚀 Live Demo

[View Live Demo](https://react-expense-tracker-taupe.vercel.app/)

---

## 📸 Screenshots

### Dashboard

![Dashboard](./screenshots/dashboard.png)

### Transactions

![Transactions](./screenshots/transactions.png)

### Edit Transaction

![Edit Transaction](./screenshots/edit-transaction.png)

### Reports

![Reports](./screenshots/reports.png)

### Mobile View

![Mobile View](./screenshots/mobile.png)

---

## ✨ Features

- Add income and expense transactions
- Edit existing transactions
- Delete transactions
- Search transactions by title or amount
- Filter transactions by income or expense
- Persist transactions using browser localStorage
- Dashboard with:
  - Total income
  - Total expenses
  - Current balance
- Expense breakdown by category
- Monthly financial reports
- Expense category pie chart
- Monthly income vs expense bar chart
- Responsive mobile navigation
- Mobile sidebar/drawer with backdrop
- Loading state handling
- Empty state handling
- Error state handling
- Form validation
- Accessible mobile navigation using ARIA attributes

---

## 🛠️ Tech Stack

- React
- JavaScript
- React Router
- Context API
- Custom Hooks
- Recharts
- CSS
- Vite
- Browser localStorage

---

## 🏗️ Architecture

The application separates presentation, shared state, transaction logic,
and data persistence.


                        React Application
                               │
                               ▼
                         Pages / Components
                               │
                               ▼
                   useTransactionContext
                               │
                               ▼
                     TransactionContext
                               │
                               ▼
                       useTransactions
                               │
                               ▼
                    TransactionService
                               │
                               ▼
                         localStorage