import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="pt-36 pb-24 min-h-screen flex items-center justify-center bg-cream-100 text-center px-4">
      <div className="max-w-md">
        <h1 className="font-serif text-6xl text-terracotta-500 font-bold mb-4">404</h1>
        <h2 className="font-serif text-3xl text-brown-900 mb-2">Page Not Found</h2>
        <p className="text-sm text-brown-700 font-light mb-8">
          The custom furniture page you are looking for has moved or does not exist.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" showArrow>
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};
