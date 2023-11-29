import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const pages = [{ name: "Items", link: "/items" }];

const Footer = () => {
  return (
    <footer className="bg-slate-600 py-4 text-white sm:px-16 px-6 flex sm:flex-row flex-col items-center">
      <div className="flex flex-row items-center gap-3 sm:gap-4 flex-1">
        <div className="flex items-center">
          <ShoppingCart fontSize="large" />
          <Typography variant="h6" component="h2" className="ml-2">
            Shopping
          </Typography>
        </div>
        <ul className="flex flex-wrap justify-center gap-2 my-4 md:my-0">
          {pages.map((page) => (
            <li key={page.name}>
              <Link
                to={page.link}
                className="hover:text-yellow-300 transition duration-300"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs">
        &copy; {new Date().getFullYear()} Shopping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
