const Footer = () => {
    return (
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">J.S. Dallas, Inc.</h3>
              <p className="mt-2 text-gray-600">
                Professional Land Surveying Services
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#services" className="text-gray-600 hover:text-gray-900">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="https://square.link/u/ZqySgynk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Pay Now
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium text-gray-900">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600">(410) 817-4600</li>
                <li className="text-gray-600">12126 Long Green Pike</li>
                <li className="text-gray-600">Glen Arm, MD 21057</li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-center">
              © {new Date().getFullYear()} J.S. Dallas, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;