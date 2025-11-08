import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold">Madhav Sweets</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <a href="tel:8128151100" className="hover:opacity-80 transition-opacity">
              <span className="text-sm md:text-base">📞 8128151100</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
