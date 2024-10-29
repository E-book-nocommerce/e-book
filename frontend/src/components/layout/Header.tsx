import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="px-24 2xl:px-[250px] flex justify-between items-center py-5">
        <div className="flex items-center">
          <Link to={'/'} className="">
            <img src="/Logo.svg" alt="Logo" className="w-[62px]" />
          </Link>
          <div className="">
            <p className="text-xs pl-2 ml-2 border-l-2 border-solid border-[#937DC2] text-[#937DC2]">
              We love <br /> books
            </p>
          </div>
        </div>
        <form className="flex items-center bg-[#F1F1F1] pl-2.5">
          <label form="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="focus:border-0 bg-[#F1F1F1] "
              placeholder="Type any book here"
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 text-sm font-medium text-[#231F2D]"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <ul className="flex justify-between align-center gap-[24px] text-[#7B7881]">
          <Link to="/about#privacy-policy" className="">
            <li className="">Privacy policy</li>
          </Link>
          <Link to="/about#warranty" className="">
            <li className="">Warranty</li>
          </Link>
          <Link to="/about#shipping" className="">
            <li className="">Shipping</li>
          </Link>
          <Link to="/about#returns" className="">
            <li className="">Returns</li>
          </Link>
        </ul>

        <ul className="flex justify-between align-center gap-[34px]">
          <a href="" className="block">
            <img src="/cart.svg" alt="" />
          </a>
          <a href="" className="block">
            <img src="/Heart.svg" alt="" />
          </a>
          <a href="" className="block">
            <img src="/User.svg" alt="" />
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;
