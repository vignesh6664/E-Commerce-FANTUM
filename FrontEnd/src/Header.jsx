import Navbar from "./Navbar";
import OfferHeading from "./OfferHeading";

const Header = () => {

  return (
    <div>
      {/* <div>
        <div className="bg-black w-full h-10 flex items-center justify-center">
          <h3 className="text-white font-medium ">
            Free Shipping Orders Over Rs.1500
          </h3>
        </div>
      </div> */}
      <div>
        <OfferHeading/>
      </div>
      <div>
        <Navbar/>
      </div>
      {/* <div className="bg-white w-full h-12">
        <nav className="  w-full text-black font-medium ">
          <div className="container mx-auto flex justify-between items-center p-4 ">
            <Link to="/" className="text-2xl font-bold">
              FANTUM
            </Link>
            <div className="relative flex flex-col items-center  rounded-lg ml-[670px]  ">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className=" text-black p-4  flex items-center justify-between ml-28 hover:text-gray-500"
              >
                Shop
                {!IsOpen ? (
                  <AiOutlineCaretDown className="ml-2" />
                ) : (
                  <AiOutlineCaretUp className="ml-2" />
                )}
              </button>
              {IsOpen && (
                <div className="absolute flex rounded-lg mt-12 ">
                  <ul className="flex flex-col ml-12 text-black p-4 leading-6 rounded-lg bg-white w-full">
                    <Link to="/pants">
                      {" "}
                      <li className=" hover:text-gray-500">Pants</li>
                    </Link>
                    <Link to="/shirts">
                      {" "}
                      <li className=" hover:text-gray-500">Shirts</li>
                    </Link>
                    <Link to="/tshirts">
                      <li className=" hover:text-gray-500">T-shirts</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-gray-500">
                Home
              </Link>

              <Link to="/contact" className="hover:text-gray-500">
                Contact
              </Link>
              <Link to="/cart" className="hover:text-gray-500">
                Cart
              </Link>
              <Link to="/login" className="hover:text-gray-500">
                Login
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button id="menu-btn" className="text-2xl">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 5h16M4 12h16M4 19h16" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <div id="menu" className="hidden flex flex-col space-y-2 p-4">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/shop" className="hover:text-gray-300">
                Shop
              </Link>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
              <Link to="/login" className="hover:text-gray-300">
                Login
              </Link>
              <Link to="/cart" className="hover:text-gray-300">
                Cart
              </Link>
            </div>
          </div>
        </nav>
      </div> */}
      <img
        className="m-auto mt-6"
        src="https://www.zantum.in/cdn/shop/files/Tshirt_-_web.jpg?v=1719053273&width=1400"
        alt=""
      />

      <div className="text-8xl font-extrabold text-red-600 mt-6">
        <marquee behavior="" direction="left">
          SELF DESIGNER SHIRTS | SHIRTS | NEW ARRIVALS | COMBO DEALS
        </marquee>
      </div>
    </div>
  );
};

export default Header;
