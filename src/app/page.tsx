'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <div className="bg-muted inline-block px-4 py-1.5 rounded-full mb-8">
          <p className="text-sm text-muted-foreground">
            Breathe Better. Live Better.
          </p>
        </div>

        <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
          Managing Asthma Made Simple
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Your personal asthma management platform. Track symptoms, monitor triggers,
          and take control of your respiratory health.
        </p>

        <Link
          href="/chat"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Chat with BreatheEasy Assistant
        </Link>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">1</div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">2</div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">3</div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">4</div>
          </div>
          <p className="text-gray-600">2,000+ active users</p>
        </div>
      </div>
    </main>
  );
} 