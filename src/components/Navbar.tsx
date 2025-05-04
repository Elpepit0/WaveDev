import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { 
    name: 'Services', 
    href: '#services',
  },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary-600">
              <svg width="200" height="70" viewBox="0 0 369.8947368421052 99.10526315789474" className="looka-1j8o68f"><defs id="SvgjsDefs1011"></defs><g id="SvgjsG1012" key="HKaMnE-0" transform="matrix(1.588021778584392,0,0,1.588021778584392,1.235934664246824,2.235934664246824)" fill="#ff9999"><g xmlns="http://www.w3.org/2000/svg"><path d="M59,19.708c0,1.032-0.574,1.961-1.497,2.423l-3.901,1.949C51.997,24.884,51,26.498,51,28.292V31h2v-2.708   c0-1.032,0.574-1.961,1.497-2.423l3.901-1.949C60.003,23.116,61,21.502,61,19.708C61,17.112,58.888,15,56.292,15H37v2h19.292   C57.785,17,59,18.215,59,19.708z"></path><path d="M51,37h-1c-3.859,0-7,3.141-7,7v1h6v-1c0-1.302,0.839-2.402,2-2.816V37z"></path><path d="M32,13.954c0,0.99-0.492,1.909-1.315,2.458l-0.513,0.342C29.438,17.243,29,18.062,29,18.943   c0,0.919,0.489,1.784,1.277,2.257l2.75,1.65C34.27,20.858,35,18.515,35,16c0-1.034-0.134-2.035-0.363-3h-1.682   C32.428,13,32,13.428,32,13.954z"></path><path d="M14.105,13.553C14.894,11.979,16.477,11,18.236,11h0.927C19.625,11,20,10.625,20,10.164C20,7.84,21.835,6,24.09,6   C24.592,6,25,5.592,25,5.09V3.363C24.035,3.134,23.034,3,22,3C15.17,3,9.565,8.299,9.051,15h2.713   C12.762,15,13.659,14.445,14.105,13.553z"></path><path d="M13.124,19c0.454,0,0.896-0.085,1.316-0.254l0.953-0.381c2.32-0.928,4.995-0.182,6.497,1.822   C22.606,21.142,23,22.323,23,23.516v0.903c0,0.515,0.328,0.97,0.816,1.133c1.238,0.413,2.081,1.531,2.167,2.818   c2.299-0.742,4.315-2.11,5.857-3.9l-2.591-1.555C27.862,22.084,27,20.562,27,18.943c0-1.552,0.771-2.992,2.062-3.854l0.513-0.342   C29.842,14.57,30,14.274,30,13.954C30,12.325,31.325,11,32.954,11h1.043C32.678,7.847,30.153,5.322,27,4.003V5.09   C27,6.694,25.694,8,24.09,8C22.938,8,22,8.942,22,10.102C22,11.728,20.728,13,19.163,13h-0.927c-0.998,0-1.896,0.555-2.342,1.447   C15.106,16.021,13.523,17,11.764,17H9.051c0.052,0.683,0.158,1.35,0.313,2H13.124z"></path><path d="M20.291,21.387c-0.961-1.28-2.667-1.759-4.155-1.164l-0.952,0.381C14.527,20.866,13.834,21,13.124,21h-3.121   c1.963,4.693,6.6,8,11.997,8c0.682,0,1.346-0.069,2-0.17v-0.249c0-0.515-0.328-0.97-0.816-1.133C21.878,27.013,21,25.795,21,24.419   v-0.903C21,22.753,20.748,21.997,20.291,21.387z"></path><path d="M54,34c0-0.552-0.448-1-1-1h-2c-0.552,0-1,0.448-1,1v1h4V34z"></path><path d="M52,49c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1s-1,0.448-1,1v4C51,48.552,51.448,49,52,49z"></path><path d="M54,37h-1v4.184c1.161,0.414,2,1.514,2,2.816v1h6v-1C61,40.141,57.859,37,54,37z"></path><path d="M55,48c0,1.654-1.346,3-3,3s-3-1.346-3-3v-1h-6v5c0,3.335,1.828,6.246,4.53,7.801C48.356,58.129,50.068,57,52,57   c1.931,0,3.643,1.13,4.47,2.801C59.172,58.246,61,55.335,61,52v-5h-6V48z"></path><path d="M40,31H4c-0.552,0-1,0.448-1,1v10c0,0.552,0.448,1,1,1h36c0.552,0,1-0.448,1-1V32C41,31.448,40.552,31,40,31z M13.867,41   h-2.402L10,38.803L8.535,41H6.133L5.01,33.142l1.98-0.283l0.806,5.645L10,35.197l2.204,3.306l0.806-5.645l1.98,0.283L13.867,41z    M25.867,41h-2.402L22,38.803L20.535,41h-2.402l-1.123-7.858l1.98-0.283l0.806,5.645L22,35.197l2.204,3.306l0.806-5.645l1.98,0.283   L25.867,41z M37.867,41h-2.402L34,38.803L32.535,41h-2.402l-1.123-7.858l1.98-0.283l0.806,5.645L34,35.197l2.204,3.306l0.806-5.645   l1.98,0.283L37.867,41z"></path><path d="M52,59c-1.13,0-2.135,0.643-2.644,1.602C50.193,60.86,51.08,61,52,61s1.807-0.14,2.644-0.398   C54.134,59.643,53.129,59,52,59z"></path></g></g><g id="SvgjsG1013" key="J3GnXt-0" transform="matrix(3.01631271160357,0,0,3.01631271160357,111.93967236500954,17.384733303982358)" fill="#444f5a"><path d="M9.6 8.44 l-3.42 11.56 l-2.02 0 l-4.14 -14.16 l2 0 l3.12 11.32 l0.04 0 l3.34 -11.32 l2.2 0 l3.34 11.32 l0.04 0 l3.12 -11.32 l2 0 l-4.12 14.16 l-2.02 0 l-3.44 -11.56 l-0.04 0 z M23.46 10.28 c1.2 0 2.15 0.27328 2.85 0.81994 s1.07 1.3067 1.11 2.28 l0 5.08 c0 0.48 0.02666 0.99334 0.08 1.54 l-1.6 0 c-0.04 -0.42666 -0.06 -0.90666 -0.06 -1.44 l-0.04 0 c-0.41334 0.61334 -0.89 1.0467 -1.43 1.3 s-1.17 0.38 -1.89 0.38 c-0.97334 0 -1.7633 -0.26 -2.37 -0.78 s-0.91 -1.2067 -0.91 -2.06 c0 -1.08 0.45334 -1.8967 1.36 -2.45 s2.1866 -0.83 3.84 -0.83 l1.34 0 l0 -0.34 c0 -0.64 -0.21 -1.1433 -0.63 -1.51 s-0.97 -0.55 -1.65 -0.55 c-0.50666 0 -0.95 0.07666 -1.33 0.23 s-0.83 0.43668 -1.35 0.85002 l-1.08 -1.12 c1.0267 -0.90666 2.28 -1.3733 3.76 -1.4 z M21 17.259999999999998 c0 1.0267 0.68002 1.54 2.04 1.54 c0.81334 0 1.4633 -0.24334 1.95 -0.73 s0.73666 -1.19 0.75 -2.11 l0 -0.52 l-1.02 0 c-1.1733 0 -2.0866 0.15 -2.74 0.45 s-0.98 0.75666 -0.98 1.37 z M30.98 10.52 l2.84 7.26 l2.72 -7.26 l1.92 0 l-3.72 9.48 l-1.98 0 l-3.86 -9.48 l2.08 0 z M44.38 10.28 c1.4533 0 2.5834 0.45664 3.39 1.37 s1.2167 2.17 1.23 3.77 l0 0.5 l-7.6 0 c0 0.77334 0.31 1.4233 0.93 1.95 s1.3767 0.79666 2.27 0.81 c0.98666 0 1.8533 -0.47334 2.6 -1.42 l1.36 1.04 c-1.0133 1.2933 -2.4134 1.94 -4.2 1.94 c-1.4533 0 -2.6234 -0.46334 -3.51 -1.39 s-1.3433 -2.1234 -1.37 -3.59 c0 -1.4133 0.45666 -2.59 1.37 -3.53 s2.09 -1.4233 3.53 -1.45 z M47.08 14.48 c-0.02666 -0.89334 -0.28 -1.5767 -0.76 -2.05 s-1.14 -0.71 -1.98 -0.71 c-0.56 0 -1.0633 0.13666 -1.51 0.41 s-0.79666 0.62668 -1.05 1.06 s-0.38 0.86334 -0.38 1.29 l5.68 0 z M56.339999999999996 5.84 c1.5067 0 2.8134 0.31 3.92 0.93 s1.9533 1.47 2.54 2.55 s0.88 2.28 0.88 3.6 s-0.32666 2.5234 -0.98 3.61 s-1.5667 1.9367 -2.74 2.55 s-2.48 0.92 -3.92 0.92 l-4.74 0 l0 -14.16 l5.04 0 z M55.739999999999995 18.2 c1.08 0 2.07 -0.21002 2.97 -0.63002 s1.6133 -1.0233 2.14 -1.81 s0.79 -1.7333 0.79 -2.84 c0 -1.6 -0.49666 -2.88 -1.49 -3.84 s-2.31 -1.44 -3.95 -1.44 l-2.98 0 l0 10.56 l2.52 0 z M70.32000000000001 10.28 c1.4533 0 2.5834 0.45664 3.39 1.37 s1.2167 2.17 1.23 3.77 l0 0.5 l-7.6 0 c0 0.77334 0.31 1.4233 0.93 1.95 s1.3767 0.79666 2.27 0.81 c0.98666 0 1.8533 -0.47334 2.6 -1.42 l1.36 1.04 c-1.0133 1.2933 -2.4134 1.94 -4.2 1.94 c-1.4533 0 -2.6234 -0.46334 -3.51 -1.39 s-1.3433 -2.1234 -1.37 -3.59 c0 -1.4133 0.45666 -2.59 1.37 -3.53 s2.09 -1.4233 3.53 -1.45 z M73.02000000000001 14.48 c-0.02666 -0.89334 -0.28 -1.5767 -0.76 -2.05 s-1.14 -0.71 -1.98 -0.71 c-0.56 0 -1.0633 0.13666 -1.51 0.41 s-0.79666 0.62668 -1.05 1.06 s-0.38 0.86334 -0.38 1.29 l5.68 0 z M78.04 10.52 l2.84 7.26 l2.72 -7.26 l1.92 0 l-3.72 9.48 l-1.98 0 l-3.86 -9.48 l2.08 0 z"></path></g></svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                    scrolled ? 'text-gray-800' : 'text-gray-800'
                  }`}
                  onClick={link.dropdown ? (e) => {
                    e.preventDefault();
                    toggleDropdown(link.name);
                  } : undefined}
                >
                  <div className="flex items-center space-x-1">
                    <span>{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown size={16} className={`transition-transform ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </div>
                </a>
                {link.dropdown && (
                  <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    activeDropdown === link.name ? 'opacity-100 visible' : 'opacity-0 invisible'
                  } group-hover:opacity-100 group-hover:visible`}>
                    <div className="py-1">
                      {link.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                className="block py-2 text-base font-medium text-gray-800 hover:text-primary-600"
                onClick={link.dropdown ? (e) => {
                  e.preventDefault();
                  toggleDropdown(link.name);
                } : () => setIsOpen(false)}
              >
                <div className="flex justify-between items-center">
                  <span>{link.name}</span>
                  {link.dropdown && (
                    <ChevronDown size={16} className={`transition-transform ${
                      activeDropdown === link.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </div>
              </a>
              {link.dropdown && (
                <div className={`transition-all duration-200 pl-4 ${
                  activeDropdown === link.name ? 'max-h-screen py-2' : 'max-h-0 overflow-hidden'
                }`}>
                  {link.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.href}
                      className="block py-2 text-sm text-gray-700 hover:text-primary-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              className="block w-full text-center px-4 py-2 rounded-md bg-primary-600 text-white font-medium text-sm hover:bg-primary-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;