import Image from 'next/image';
import Nav from '../nav';
type PageProps = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Page({ params }: PageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Nav />
      <div className="pt-10">
        <h1>Page - {params?.slug}</h1>
      </div>
    </main>
  );
}
