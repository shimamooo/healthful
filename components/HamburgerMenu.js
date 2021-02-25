import { useEffect } from 'react';

export default function HamburgerMenu() {
  useEffect(() => {
    const hamburgerMenu = document.querySelector('.HAMBURGER-MENU');
    const menu = document.querySelector('.MENU');
    const line1 = document.querySelector('.LINE-1');
    const line2 = document.querySelector('.LINE-2');
    const handleMenuOpen = () => {
      menu.classList.toggle('open');
      line1.classList.toggle('collapse-1');
      line2.classList.toggle('collapse-2');
    };

    hamburgerMenu.addEventListener('click', handleMenuOpen);

    return () => {
      hamburgerMenu.removeEventListener('click', handleMenuOpen);
    };
  }, []);

  return (
    <div className='HAMBURGER-MENU cursor-pointer h-14 w-14 rounded-full bg-gray-400 opacity-70 grid place-items-center z-20 hover:opacity-60 transition-opacity duration-300'>
      <div className='h-5 w-7 grid place-items-center'>
        <div className='LINE-1 h-1 w-full bg-white transform transition-transform duration-300'></div>
        <div className='LINE-2 h-1 w-full bg-white transform transition-transform duration-300'></div>
      </div>
    </div>
  );
}
