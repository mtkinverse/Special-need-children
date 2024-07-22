import React from "react";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Project Spectrum",
      href: "/project-spectrum",
    },
    {
      name: "Our Projects",
      href: "/projects",
    },
    {
      name: "People",
      href: "/people",
    },
    {
      name: "Contact Us",
      href: "contact",
    },
  ];
  const [isExpanded, setIsExpanded] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      // Check the window size and set isExpanded accordingly
      if (window.innerWidth < 640) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="w-full fixed z-50 md:flex-row flex-col md:h-16 bg-themeDGreen flex justify-around items-center md:items-stretch gap-2 sm:gap-4 font-poppins p-2 shadow-sm">
      <Link
        to={"/"}
        className="logo rounded-full w-24 h-24 cursor-pointer mt-1 border-2 border-themeOrange"
      >
        <img
          className="w-full h-full rounded-full"
          src={process.env.PUBLIC_URL + "/icon/android-chrome-512x512.png"}
          alt="logo"
        />
      </Link>
      <div className="menu">
        <ul className="flex flex-col sm:flex-row justify-between items-center h-full gap-2">
          <button
            className={`sm:hidden text-themeWhite`}
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? <ImCross className="text-2xl"/> : <TiThMenu className="text-3xl"/>}
          </button>
          {links.map((link) => (
            <li
              key={link.name}
              className={`text-themeWhite ${
                isExpanded ? "block" : "hidden"
              } text-lg mx-2 font-semibold hover:underline-offset-8 decoration-4 decoration-themeOrange duration-200 hover:underline`}
            >
              <NavLink
                onClick={() => {
                  if (window.innerWidth < 640) setIsExpanded(false);
                }}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "underline-offset-8 decoration-4 decoration-themeOrange underline"
                      : ""
                  }`
                }
                to={link.href}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;