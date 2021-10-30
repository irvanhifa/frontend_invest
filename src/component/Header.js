import '../App.css';
import Logo from '../Logo.svg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="text-white color-1 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img 
              alt="team" 
              className="w-10 h-10 text-white rounded-full" 
              src={Logo}
            ></img>
            <span className="ml-3 text-xl text-white">Investment</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            
                <Link to="/" className="mr-5 hover:text-gray-300">Overview</Link>
                <Link to="/detail" className="mr-5 hover:text-gray-300">Detail</Link>
                <Link to="/transaction" className="mr-5 hover:text-gray-300">Transaction</Link>
                <Link to="/admin" className="mr-5 hover:text-gray-300">Admin</Link>
            
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;