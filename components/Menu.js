import Link from 'next/link';

export default function Menu() {
  return (
    <div className='MENU fixed h-full w-full z-10 transform -translate-y-full bg-menu transition-transform duration-1000 flex items-center'>
      <div className='flex-1'></div>
      <div className='flex-1 px-12'>
        <ul className='font-serif space-y-8 text-4xl text-menu'>
          <li className='border-menu'>
            <Link href='/product'>
              <a className='MENU-LINK'>Product</a>
            </Link>
          </li>
          <li className='border-menu'>
            <Link href='/saved-recipes'>
              <a className='MENU-LINK'>Saved Recipes</a>
            </Link>
          </li>
          <li className='border-menu'>
            <Link href='/community'>
              <a className='MENU-LINK'>Community</a>
            </Link>
          </li>
          <li className='border-menu'>
            <Link href='/about'>
              <a className='MENU-LINK'>About</a>
            </Link>
          </li>
        </ul>
        <div className='mt-16 flex font-serif text-xl text-link'>
          <ul className='flex-1 space-y-2'>
            <li>
              <Link href='/team'>
                <a className='hover:text-gray-200 transition duration-300'>
                  Team
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className='hover:text-gray-200 transition duration-300'>
                  Contact
                </a>
              </Link>
            </li>
            <li>
              <Link href='/technology'>
                <a className='hover:text-gray-200 transition duration-300'>
                  Technology
                </a>
              </Link>
            </li>
          </ul>
          <ul className='flex-1 space-y-2'>
            <li>
              <a
                href=''
                className='hover:text-gray-200 transition duration-300'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href=''
                className='hover:text-gray-200 transition duration-300'
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
