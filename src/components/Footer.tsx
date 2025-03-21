import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <div className="text-center py-8 text-gray-500 opacity-70">
      <p className="flex items-center justify-center gap-2">
        Inspired by{' '}
        <a
          href="https://mathisgarcia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          Mathis Garcia
        </a>{' '}
        <Heart size={16} className="text-red-500" />
      </p>
    </div>
  );
}