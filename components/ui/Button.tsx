export default function Button({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white transition hover:opacity-80">
      {children}
    </button>
  );
}