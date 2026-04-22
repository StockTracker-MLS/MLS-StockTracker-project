# 🧠 Stock Tracker Web App

## 🧠 Core Features

---

## 🔐 Authentication System
- User sign up / login system  
- Email + password authentication  
- Google OAuth login (Sign in with Google)  
- Session-based or JWT authentication  
- Each user has a personal account  

---

## 📊 Stock Dashboard (Home Page)
- Search bar to find stocks by symbol or name (AAPL, TSLA, etc.)  
- Display list of stocks with:
  - Current price  
  - Daily change (+/- %)  
  - Company name  
- Clickable stock cards → opens detailed view  

---

## 📈 Stock Detail Page

When a user clicks a stock:

### Company Information:
- Name, symbol, sector, market cap, etc.  
- Real-time/updated price display  
- Interactive price chart (1D, 1W, 1M, 1Y)  
- Volume, open, close, high/low data  
- Additional API-provided insights (if available)  

---

## 💸 Buy/Sell UI (Simulation Only)
- “Buy” and “Sell” buttons (UI only, no real transactions)  
- Modal popup for:
  - Quantity input  
  - Estimated cost  
- Confirmation screen (fake transaction flow)  

---

## ⭐ Watchlist / Favorites
- Users can:
  - Add stocks to favorites  
  - Remove stocks  
- Separate watchlist page:
  - Quick access to saved stocks  
- Persistent storage per user (database-backed)  

---

## 📉 Analytics / Data Visualization
- Line chart showing stock price trends  
- Time range selector (1D / 1W / 1M / 1Y)  
- Optional indicators (if API supports):
  - Moving averages  
  - % change trends  

---

## 🧱 Tech Stack

### Frontend
- HTML  
- CSS  
- Vanilla JavaScript (or optional React upgrade later)  
- Charting library (Chart.js or similar)  

---

### Backend
- Node.js  
- Express.js  
- REST API structure  

---

### Database
- SQL (PostgreSQL or MySQL)  
- Tables:
  - users  
  - watchlist  
  - saved_stocks  

---

### Authentication
- Passport.js OR Firebase Auth OR custom JWT system  
- Google OAuth integration  

---

### Stock API (Data Source)
- Finnhub / Alpha Vantage / Twelve Data  
- Real-time stock data + company info  

---

## 🧩 Wireframe Structure

---

### 1. Landing Page
- Login / Sign up buttons  
- “Continue with Google”  
- Simple intro UI  

---

### 2. Dashboard
- Top search bar  
- List/grid of stocks  
- Watchlist preview sidebar  

---

### 3. Stock Detail Page
- Stock header (name, price, change %)  
- Chart section (center focus)  
- Stats panel (right side)  
- Buy/Sell buttons  

---

### 4. Watchlist Page
- Saved stocks list  
- Quick price updates  
- Remove button  

---

## ⚙️ System Flow
- User logs in (email or Google)  
- Lands on dashboard  
- Searches/selects stock  
- API fetches stock data  
- User views chart + details  
- User adds to watchlist (stored in SQL)  
- User can revisit saved stocks anytime  

---

## 💡 Extra Features (If Time Allows)
- Dark mode / light mode toggle  
- Stock news feed  
- Price alerts (email or popup)  
- Portfolio simulation (fake balance system)  
- Trending stocks section  

---

## 🎯 Goal of the Project

To build a real-world financial dashboard clone that demonstrates:

- API integration  
- Authentication systems  
- Database design  
- Frontend + backend communication  
- Data visualization  