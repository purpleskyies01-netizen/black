// components/Navbar.tsx
import { AlertTriangle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-black border-b-4 border-red-900 sticky top-0 z-50 shadow-xl">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-9 h-9 text-red-600 animate-pulse" />
          <h1 className="text-3xl font-black text-red-600 tracking-widest uppercase">
            DARKBLACKMAIL
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <span className="bg-red-800 text-white px-4 py-1.5 rounded-full text-xs font-bold animate-pulse">
            WEST VIRGINIA LEAK IMMINENT
          </span>
          <span className="text-gray-500 text-xs font-mono">SECURE ACCESS</span>
        </div>
      </div>
    </nav>
  );
}
