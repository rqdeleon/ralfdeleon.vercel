export default function TechTag({ label }: { label: string }) {
  return (
    <span className="inline-block font-mono text-xs text-green bg-green/10 px-2.5 py-1 rounded">
      {label}
    </span>
  );
}
