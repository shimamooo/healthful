import Image from 'next/image';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
  return (
    <nav className='flex px-12 py-6'>
      <figure className='flex-1'>
        <Link href='/'>
          <a>
            <Image
              src='/logo.svg'
              alt='Healthful logo'
              width={64}
              height={64}
            />
          </a>
        </Link>
      </figure>
      <div className='flex-1 flex justify-between items-center font-medium text-gray-400'>
        <a href='/model'>Product</a>
        <HamburgerMenu />
      </div>
    </nav>
  );
}
