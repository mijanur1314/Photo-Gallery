# Photo Gallery Web App

A responsive, performance-optimized React application that fetches and displays photos in a beautiful grid layout. Built as a pre-screening assignment for the Frontend React Internship at Celebrare.

## 🚀 Features

- **Dynamic Photo Grid**: Fetches 30 high-quality images from the [Picsum API](https://picsum.photos/).
- **Fully Responsive Design**: Fluid grid layout tailored for all screen sizes (Desktop: 4 columns, Tablet: 2 columns, Mobile: 1 column).
- **Real-Time Client-Side Search**: Instantly filter photos by author name as you type, without triggering unnecessary network requests or page reloads.
- **Persistent Favourites**: Mark photos as favourites using a heart icon. State is managed robustly with `useReducer` and synchronized with `localStorage` to persist across browser reloads.
- **Robust State Handling**: Graceful loading spinners during data fetching and clear error messages on network failures.
- **Performance Optimized**: Implements React performance hooks (`useMemo`, `useCallback`) to avoid unnecessary re-renders and recalculations.

## 🛠️ Tech Stack

- **Core**: React 18, Vite
- **Styling**: Tailwind CSS
- **State Management**: `useReducer`, `useState`, `useEffect`
- **Performance Hook**: `useMemo`, `useCallback`

## 🧠 Architecture Highlights

- **Custom Hook (`useFetchPhotos`)**: Abstracts away the data-fetching logic, separating network concerns from UI presentation.
- **Reducer Pattern**: Uses `useReducer` instead of `useState` for the favourites feature, establishing a scalable pattern for managing complex state interactions.
- **Memoization**:
  - `useMemo`: Caches the expensive filtering array computation.
  - `useCallback`: Ensures stable function references for event handlers passed to child components.

## 📦 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd photo-gallery
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed.
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to the local URL provided by Vite (typically `http://localhost:5173`).

## 📁 Project Structure

```text
src/
├── components/
│   ├── Gallery.jsx       # Grid layout orchestration
│   ├── PhotoCard.jsx     # Individual photo display and favourite toggle
│   └── SearchBar.jsx     # User input for filtering results
├── hooks/
│   └── useFetchPhotos.js # Custom hook for API interactions
├── App.jsx               # Application entry point & state orchestrator
├── main.jsx              # React DOM mounting
└── index.css             # Tailwind base styles
```

## 📝 Assignment Requirements Met

✅ React + Vite project setup with Tailwind CSS (No other UI libraries).
✅ Fetches 30 photos with loading/error states.
✅ Responsive grid layout (1, 2, and 4 columns).
✅ Real-time search filter by author name without API calls.
✅ Favourites managed with `useReducer` and persisted to `localStorage`.
✅ Externalized logic in `useFetchPhotos` custom hook.
✅ Performance optimization using `useCallback` and `useMemo`.

---
*Developed for the Celebrare Frontend Intern Pre-Screening Assignment.*
