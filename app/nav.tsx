'use client';

import Link from 'next/link';

export const Nav = () => {
  return (
    <nav
      className="flex flex-row  items-center justify-between  p-10"
      style={{ width: '100%' }}
    >
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About us</Link>
      <Link href={'/services'}>Services</Link>
      <Link href={'/pay-my-bill'}>Pay my bill</Link>
      <Link href={'/contact-us'}>Contact us</Link>
    </nav>
  );
};

export default Nav;
