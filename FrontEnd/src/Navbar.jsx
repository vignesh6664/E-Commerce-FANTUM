import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [delUser, setDelUser] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setUser(res);
    });
  }, []);

  // const deleteUser = (id) => {
  //   axios.delete(`http://localhost:5000/users/${id}`).then((response) => {
  //     console.log(response);
  //     console.log(id);
  //     setDelUser(delUser.filter((movie) => movie.id !== id));
  //   });
  // };
  return (
    // <div className="bg-white w-full h-12">
    //   <nav className="  w-full text-black font-medium ">
    //     <div className=" mx-auto flex  justify-between items-center p-4 ">
    //       <Link to="/" className="text-2xl font-bold">
    //         FANTUM
    //       </Link>
    //       <div className="relative flex flex-col items-center  rounded-lg ml-[670px]  ">
    //         <button
    //           onClick={() => setIsOpen((prev) => !prev)}
    //           className=" text-black p-4  flex items-center justify-between ml-28 hover:text-gray-500"
    //         >
    //           Shop
    //           {!IsOpen ? (
    //             <AiOutlineCaretDown className="ml-2" />
    //           ) : (
    //             <AiOutlineCaretUp className="ml-2" />
    //           )}
    //         </button>
    //         {IsOpen && (
    //           <div className="absolute flex rounded-lg mt-12 ">
    //             <ul className="flex flex-col ml-12 text-black p-4 leading-6 rounded-lg bg-white w-full">
    //               <Link to="/pants">
    //                 {" "}
    //                 <li className=" hover:text-gray-500">Pants</li>
    //               </Link>
    //               <Link to="/shirts">
    //                 {" "}
    //                 <li className=" hover:text-gray-500">Shirts</li>
    //               </Link>
    //               <Link to="/tshirts">
    //                 <li className=" hover:text-gray-500">T-shirts</li>
    //               </Link>
    //             </ul>
    //           </div>
    //         )}
    //       </div>
    //       <div className="md:flex space-x-6">
    //         <Link to="/" className="hover:text-gray-500">
    //           Home
    //         </Link>

    //         <Link to="/contact" className="hover:text-gray-500">
    //           Contact
    //         </Link>
    //         <Link to="/cart" className="hover:text-gray-500">
    //           Cart
    //         </Link>
    //         {!user ? (
    //           <Link to="/login" className="hover:text-gray-500">
    //             Login
    //           </Link>
    //         ) : (
    //           <div>
    //             <Link to="/login">Logout</Link>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <>
      <div className="bg-white w-full h-12">
        <nav className="w-full  text-black font-medium">
          <div className="mx-auto flex justify-between items-center p-4">
            <Link to="/" className="text-2xl font-bold">
              FANTUM
            </Link>
            <div className="relative flex flex-col items-center md:ml-auto">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-black p-4 flex items-center justify-between ml-28 md:ml-0 hover:text-gray-500"
              >
                Shop
                {!IsOpen ? (
                  <AiOutlineCaretDown className="ml-2" />
                ) : (
                  <AiOutlineCaretUp className="ml-2" />
                )}
              </button>
              {IsOpen && (
                <div className=" hidden absolute md:flex rounded-lg mt-12">
                  <ul className="flex flex-col w-full ml-1 text-black p-4 leading-8 rounded-lg bg-white ">
                    <Link to="/pants">
                      <li className="hover:text-gray-500">Pants</li>
                    </Link>
                    <Link to="/shirts">
                      <li className="hover:text-gray-500">Shirts</li>
                    </Link>
                    <Link to="/tshirts">
                      <li className="hover:text-gray-500">T-shirts</li>
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
              {!user ? (
                <Link to="/login" className="hover:text-gray-500">
                  Login
                </Link>
              ) : (
                <div>
                  <Link to="/login">Logout</Link>
                </div>
              )}
            </div>
          </div>
          {/* <div className="flex md:hidden justify-end p-4">
      <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {!mobileMenuOpen ? (
          <AiOutlineMenu className="text-2xl" />
        ) : (
          <AiOutlineClose className="text-2xl" />
        )}
      </button>
    </div>
    {mobileMenuOpen && (
      <div className="md:hidden flex flex-col p-4 bg-white w-full">
        <Link to="/" className="hover:text-gray-500 p-2">
          Home
        </Link>
        <Link to="/contact" className="hover:text-gray-500 p-2">
          Contact
        </Link>
        <Link to="/cart" className="hover:text-gray-500 p-2">
          Cart
        </Link>
        {!user ? (
          <Link to="/login" className="hover:text-gray-500 p-2">
            Login
          </Link>
        ) : (
          <div>
            <Link to="/login" className="hover:text-gray-500 p-2">
              Logout
            </Link>
          </div>
        )}
      </div>
    )} */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
