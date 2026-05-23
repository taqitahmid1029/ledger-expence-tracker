# Ledger Expense Tracker

A comprehensive personal finance management application built with React and Tailwind CSS. This project serves as a practical demonstration of modern React development practices and component-based architecture.

## Overview

Ledger Expense Tracker is a web-based budgeting application designed to help users monitor their income and expenses efficiently. The application provides real-time financial insights through an intuitive dashboard interface. This project represents a foundational learning exercise in React and Tailwind CSS development, demonstrating core concepts and best practices in modern web development.

## Live Demo

View the application here: **[https://taqitahmid1029.github.io/ledger-expence-tracker/](https://taqitahmid1029.github.io/ledger-expence-tracker/)**

## Features

- **Transaction Management** - Add and categorize income and expense entries with detailed information
- **Real-time Dashboard** - View aggregated financial data including total income, expenses, and savings rate
- **Data Persistence** - Local storage integration ensures data survives page reloads and browser sessions
- **Transaction History** - Complete transaction log with deletion capabilities for error correction
- **Responsive Design** - Fully responsive interface optimized for both mobile and desktop devices with seamless user experience across all screen sizes
- **Icon Integration** - Lucide React icons for enhanced visual clarity and user experience

## Technology Stack

- **React** (v19.2.6) - Frontend framework with hooks (useState and useEffect) for state management
- **Tailwind CSS** (v4.3.0) - Utility-first CSS framework for responsive styling
- **Lucide React** (v1.16.0) - Icon library for UI enhancements
- **Prettier with Tailwind Plugin** - Code formatter ensuring consistent code style and optimized class ordering
- **GitHub Pages** - Hosting and deployment platform
- **Vite** (v8.0.12) - Fast build tool and development server
- **ESLint** - Code quality and linting

## Key Learning Outcomes

This project demonstrates proficiency in:
- React component architecture and prop-based data flow
- State management using React hooks (useState and useEffect)
- Local storage implementation for data persistence
- Responsive design patterns with Tailwind CSS for mobile and desktop optimization
- Component composition and prop drilling
- Integration of third-party icon libraries
- Code formatting and linting with Prettier and Tailwind plugins

## Installation & Setup

```bash
# Clone the repository
git clone https://github.com/taqitahmid1029/ledger-expence-tracker.git

# Navigate to project directory
cd ledger-expence-tracker

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Development

The application is structured with component-based architecture:
- **Header** - Navigation and utility controls
- **Dashboard** - Summary statistics and financial overview
- **NewEntry** - Form interface for transaction input
- **Transaction** - Transaction history and management
- **DashCards** - Financial metric display components

## Challenges & Solutions

**Component Props Architecture**: The primary development challenge involved managing data flow across multiple components through prop drilling. This experience highlighted the importance of state management patterns and demonstrated the value of solutions like Context API for complex applications.

## Deployment

This project is hosted on GitHub Pages. The build is automatically deployed from the main branch, ensuring continuous integration with the latest changes.

## Future Enhancements

- Advanced filtering and search capabilities
- Data export functionality (CSV format)
- Expanded category options
- Analytics and trend visualization
- Multi-currency support

## Repository

Source code available at: **[https://github.com/taqitahmid1029/ledger-expence-tracker](https://github.com/taqitahmid1029/ledger-expence-tracker)**

## Author

Taqi Tahmid

---

Built with React, Tailwind CSS, and a commitment to clean code principles.
