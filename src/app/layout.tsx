import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Fibric Toolset — Curve-Based Clothing System for Houdini',
  description: 'The first curve-based clothing and garment system in Houdini. Endless possibilities, maximum realism.',
  icons: {
    icon: '/images/logo/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
