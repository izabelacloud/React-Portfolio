export default function Quote({ children, cite }) {
  return (
    <blockquote className="border-l-2 border-accent pl-6">
      <p className="font-display text-xl italic leading-relaxed sm:text-2xl">{children}</p>
      {cite && <cite className="mt-3 block text-sm text-muted not-italic">{cite}</cite>}
    </blockquote>
  );
}
