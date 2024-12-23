import React from 'react';

const footer = () => {
  return (
    <footer className="w-full footer footer-center bg-base-200 text-base-content p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <p>&copy; {new Date().getFullYear()} Egg Inc. All rights reserved.</p>
        <div className="mt-2 sm:mt-0">
          <p className="text-sm">One egg a day keeps Diarreah away...</p>
        </div>
      </div>
    </footer>
  );
};
{/* Kumment */}
export default footer;