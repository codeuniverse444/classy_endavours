const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
       
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <img
              src="/images/footer_logo.png" 
              alt="DocuTech Logo"
              className="h-8"
            />
            
          </div>
          <p className="text-sm text-gray-300">Powered by Classy Endeavors</p>
        </div>

        
        <div className="flex space-x-6 mt-4 md:mt-0">
          {["Features", "Why Choose Us", "Pricing", "FAQ", "Legal terms", "Privacy policy"].map(
            (link, index) => (
              <a
                key={index}
                href="#"
                className="text-sm text-gray-300 hover:text-white transition duration-200"
              >
                {link}
              </a>
            )
          )}
        </div>

       
        <div className="flex space-x-4 mt-4 md:mt-0">
          {["facebook", "twitter", "linkedin", "github", "discord"].map((platform, index) => (
            <a key={index} href="#" className="text-gray-300 hover:text-white transition">
              <i className={`fab fa-${platform} text-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
