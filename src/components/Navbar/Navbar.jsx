import React from 'react';
import Button from '../Button';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <>
    
      <div className="bg-blue-900 text-white text-center py-2 text-sm font-medium">
        No Sign up required
      </div>

      {/* Navbar */}
      <nav className={`${styles.navbar} bg-white shadow-sm py-3`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-12">
            
            <a href="/" className="flex items-center">
              <img src="/images/logo___.png" alt="FlowChart Logo" className={styles.logoImage} />
             
            </a>

          
            <div className={styles.navLinksContainer}>
               <a href="#" className={styles.menuLink}>Features</a>
               <a href="#" className={styles.menuLink}>Why Choose Us</a>
                <a href="#" className={styles.menuLink}>Pricing</a>
               <a href="#" className={styles.menuLink}>FAQ</a>
            </div>

          </div>

        
          <div className="flex items-center space-x-4 ml-auto pr-10">
            <img src="/images/navlogo.png" alt="Discord Logo" className={styles.logoImage} />
            <Button variant="primary" style={{ backgroundColor: '#284c74', color: 'white' }}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
