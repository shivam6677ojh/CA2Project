import Header from "../Component/Header";
const Footer = () => {
    return (
        
        <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">

                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Career Explorer</h3>
                    <p className="mt-2 text-sm">
                        Empowering job seekers with resources, career advice, and job listings to explore new opportunities and succeed in their careers.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/jobs" className="hover:text-blue-400">Find Jobs</a></li>
                        <li><a href="/CareerResource" className="hover:text-blue-400">Career Resources</a></li>
                        <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                        <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>

                {/* Contact & Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                    <p className="mt-2 text-sm">Email: support@careerexplorer.com</p>
                    <p className="text-sm">Phone: +1 (123) 456-7890</p>

                    {/* Social Media Links */}
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="hover:text-blue-400"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>

            </div>

            {/* Copyright Notice */}
            <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-center">
                <p>© {new Date().getFullYear()} Career Explorer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
