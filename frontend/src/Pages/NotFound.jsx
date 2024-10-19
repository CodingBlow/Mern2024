import React from 'react';

function NotFound() {
  return (
    <div className="flex items-center justify-center h-[70vh] bg-gray-100"> {/* Set height to 60% of viewport */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">404</h1>
        <p className="text-xl mt-4">Page Not Available</p>
        <p className="mt-2">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;

