import React from 'react';
import ThemeBtn from './ThemeBtn';

export default function Navbar() {
  return (
    <nav className="sticky top-0 p-3 left-0 w-full text-white border-b bg-indigo-700 dark:bg-slate-900">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Saurav Kumar</h1>
        <div>
          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
}
