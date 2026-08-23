export default function ImageGallery({ images }) {
  if (!images?.length) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {images.map((src) => (
        <img key={src} src={src} alt="" loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
      ))}
    </div>
  );
}
