export default function PhotoCard({ photo, isFavourite, onToggle }) {
  return (
    <div className="rounded-lg overflow-hidden shadow bg-white dark:bg-gray-800">
      <img
        src={`https://picsum.photos/id/${photo.id}/400/300`}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 flex justify-between items-center">
        <span className="text-sm font-medium truncate">{photo.author}</span>
        <button onClick={() => onToggle(photo.id)} className="text-xl">
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}
