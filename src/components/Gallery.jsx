import PhotoCard from "./PhotoCard";

export default function Gallery({ photos, favourites, onToggle }) {
  if (photos.length === 0)
    return <p className="text-center text-gray-400 mt-10">No results found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(photo.id)}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
