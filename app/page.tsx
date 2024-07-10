import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <div className="pt-10">
        <h1>Page - home</h1>
      </div>
    </main>
  );
}
