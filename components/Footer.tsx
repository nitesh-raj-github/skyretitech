export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Skyreti. All rights reserved.
      </div>
    </footer>
  );
}
