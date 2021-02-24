import { useEffect } from 'react';

export default function HamburgerMenu() {
  useEffect(() => {
    const hamburgerMenu = document.querySelector('.HAMBURGER-MENU');
    const menu = document.querySelector('.MENU');
    const handleMenuOpen = () => {
      menu.classList.toggle('open');
    };

    hamburgerMenu.addEventListener('click', handleMenuOpen);

    return () => {
      hamburgerMenu.removeEventListener('click', handleMenuOpen);
    };
  }, []);

  return (
    <div className='HAMBURGER-MENU cursor-pointer h-14 w-14 rounded-full bg-gray-400 opacity-80 grid place-items-center z-20 hover:opacity-60 transition-opacity duration-300'>
      <div className='h-5 w-7 grid place-items-center'>
        <div className='h-1 w-full bg-white'></div>
        <div className='h-1 w-full bg-white'></div>
      </div>
    </div>
  );
}
