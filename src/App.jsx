import { useReducer, useCallback, useMemo, useEffect } from "react";
import { useFetchPhotos } from "./hooks/useFetchPhotos";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";
import { useState } from "react"

// Reducer for favourites
function favouritesReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return state.includes(action.id)
        ? state.filter((id) => id !== action.id)
        : [...state, action.id];
    case "LOAD":
      return action.payload;
    default:
      return state;
  }
}

export default function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [query, setQuery] = useState("");

  const [favourites, dispatch] = useReducer(favouritesReducer, [], () =>
    JSON.parse(localStorage.getItem("favourites") || "[]"),
  );

  // Persist favourites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // useCallback: stable reference so Gallery/SearchBar don't re-render unnecessarily
  const handleSearch = useCallback((e) => setQuery(e.target.value), []);
  const handleToggle = useCallback(
    (id) => dispatch({ type: "TOGGLE", id }),
    [],
  );

  // useMemo: only recomputes when photos or query changes
  const filteredPhotos = useMemo(
    () =>
      photos.filter((p) =>
        p.author.toLowerCase().includes(query.toLowerCase()),
      ),
    [photos, query],
  );

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );
  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <SearchBar value={query} onChange={handleSearch} />
      <Gallery
        photos={filteredPhotos}
        favourites={favourites}
        onToggle={handleToggle}
      />
    </div>
  );
}
