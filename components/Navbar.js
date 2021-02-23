export default function Navbar() {
  return (
    <nav className='sticky-nav shadow-md flex justify-between items-center'>
      <div className='flex-1'>logo</div>
      <ul className='flex-1 justify-center flex gap-8'>
        <li>Team</li>
        <li>Documentation</li>
        <li>Saved Recipes</li>
      </ul>
      <div className='flex-1 justify-end flex gap-8'>
        <a href='/login'>Login</a>
        <a href='/signup'>Sign Up</a>
      </div>
    </nav>
  );
}
