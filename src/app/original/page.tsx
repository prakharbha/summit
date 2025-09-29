'use client';

import { useEffect } from 'react';

export default function OriginalPage() {
  useEffect(() => {
    // Redirect to the static HTML version
    window.location.href = '/original.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Redirecting to Original Homepage...</h1>
        <p className="text-gray-600">
          If you're not redirected automatically, 
          <a href="/original.html" className="text-blue-600 hover:underline ml-1">click here</a>.
        </p>
      </div>
    </div>
  );
}
