export default function Menu() {
  return (
    <div className='MENU absolute h-full w-full z-10 transform -translate-y-full bg-menu transition-transform duration-1000'>
      <ul className=''>
        <li>Application</li>
        <li>Saved Recipes</li>
        <li>Contributors</li>
        <li>Tools Used</li>
      </ul>
    </div>
  );
}
