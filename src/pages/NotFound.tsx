
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import BackButton from '@/components/layout/BackButton';

const NotFound = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-16">
      <BackButton />
      <div className="text-6xl font-bold text-primary mb-4">404</div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved to another URL.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild variant="default" className="cta-button-primary">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-gray-300">
          <Link to="/" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
