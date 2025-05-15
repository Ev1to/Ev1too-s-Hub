
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-bold font-mono"
            >
              <span className="text-electric-purple">Dev</span>
              <span className="text-foreground">.Prodigy</span>
            </a>
            <p className="text-foreground/60 text-sm mt-2">
              Building tomorrow's web, today.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-foreground/60 text-sm">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-foreground/40 text-xs mt-1">
              Crafted with precision and passion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
