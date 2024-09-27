const Navbar = () => {
  return (
    <nav className="flex justify-around items-center p-4 shadow-md">
      <h1 className="text-3xl text-green-500 font-semibold">Tokopaedi</h1>
      <ul className="flex items-center gap-4 font-medium ">
        <li className="hover:text-green-500 cursor-pointer">Home</li>
        <li className="hover:text-green-500 cursor-pointer">Products</li>
      </ul>
    </nav>
  );
};
export default Navbar;
