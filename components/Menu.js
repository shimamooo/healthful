export default function Menu() {
  return (
    <div className='MENU fixed h-full w-full z-10 transform -translate-y-full bg-menu transition-transform duration-1000 flex items-center'>
      <div className='flex-1'></div>
      <div className='flex-1 px-12'>
        <ul className='font-serif space-y-8 text-4xl color-menu'>
          <li className='border-menu'>Product</li>
          <li className='border-menu'>Saved Recipes</li>
          <li className='border-menu'>Community</li>
          <li className='border-menu'>About</li>
        </ul>
        <div className='mt-16 flex font-serif text-xl text-gray-200'>
          <ul className='flex-1 space-y-2'>
            <li>Team</li>
            <li>Contact</li>
            <li>Technology</li>
          </ul>
          <ul className='flex-1 space-y-2'>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
