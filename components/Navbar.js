import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex px-12 py-4'>
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
      <div className='flex-1 flex justify-between items-center font-bold text-gray-400'>
        <a href='/model'>Model</a>
        <div className='h-16 w-16 rounded-full bg-gray-400 opacity-50'></div>
      </div>
    </nav>
  );
}
