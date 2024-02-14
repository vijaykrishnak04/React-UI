import userIcon from '../../assets/user (1).png'; // Make sure to add the correct path to your user icon image
import hamburger from '../../assets/menu.png';
import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white sticky top-14 w-full z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 flex justify-between h-auto">
                {/* Mobile menu button */}
                <button
                    className="inline-flex items-center justify-center p-2  md:hidden"
                    type="button"
                    onClick={() => {
                        toggleMobileMenu()
                    }}
                >
                    <img src={hamburger} alt="menu-button" className={`w-auto h-5 transition-transform duration-500 ${
                  isMobileMenuOpen ? "rotate-90" : "rotate-0"
                }`} />
                </button>
                <div></div>
                {/* Navigation links */}
                <div className={`${isMobileMenuOpen ? "flex flex-col absolute top-full w-10/12 bg-white md:static" : 'hidden md:flex space-x-4 my-2 ml-40'}`}>
                    {['Home', 'Dashboard', 'Products', 'Transactions', 'Journal'].map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-gray-700 hover:text-gray-900 md:px-3 py-2 rounded-md text-sm font-medium"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* User info */}
                <div className="flex items-center flex-col my-3">
                    <img src={userIcon} alt="User" className="h-8 w-8 rounded-full" />
                    <span className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Joseph Lazar</span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
