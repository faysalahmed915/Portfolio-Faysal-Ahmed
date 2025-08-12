import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";
import Logo from "../Shared/logo";

const Footer = () => {
    return (
        <footer className="bg-base-300 text-base-content">
            <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        {/* <h2 className="text-xl font-semibold">Faysal Ahmed</h2> */}
                        <div className="w-20">
                            <Logo></Logo>
                        </div>
                        <p className="text-sm opacity-70">Web Developer • Portfolio © {new Date().getFullYear()}</p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-4 text-xl">
                        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                            <FaLinkedin />
                        </a>
                        <Link to='/contactMe' className="hover:text-primary transition">
                            <FaEnvelope />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
