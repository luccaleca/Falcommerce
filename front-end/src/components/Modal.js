// src/components/Modal.js

import React from 'react';

export default function Modal({ show, onClose, title, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-80 shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✖</button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}