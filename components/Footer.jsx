// Import necessary modules
import { FaInstagram, FaDiscord } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-24">
      <div className="container mx-auto px-4 flex flex-col justify-between items-center gap-6">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold pb-4 text-center">Contact Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/tartancatholic/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://discord.com/invite/RhdZjCFUsJ" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              <FaDiscord size={24} />
            </a>
            <a href="mailto:cmunewman@gmail.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              <SiGmail size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="text-sm text-gray-400">
          <p>Copyright &copy; {new Date().getFullYear()} CMU Catholic Newman Club</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
