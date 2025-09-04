import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold neon-text">اسپرت وحید</h1>
              <p className="text-xs text-muted-foreground">نصب شیشه دودی</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              خانه
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              خدمات
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              محصولات
            </a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">
              نمونه کارها
            </a>
            <a href="#booking" className="text-foreground hover:text-primary transition-colors">
              رزرو نوبت
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              تماس با ما
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <div className="flex items-center space-x-2 space-x-reverse text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">۰۹۱۲-۳۴۵-۶۷۸۹</span>
            </div>
            <Button variant="default" size="sm" className="btn-neon">
              <a href="#booking">رزرو نوبت</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                خانه
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                خدمات
              </a>
              <a
                href="#products"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                محصولات
              </a>
              <a
                href="#gallery"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                نمونه کارها
              </a>
              <a
                href="#booking"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                رزرو نوبت
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                تماس با ما
              </a>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">۰۹۱۲-۳۴۵-۶۷۸۹</span>
                  </div>
                  <Button variant="default" size="sm" className="btn-neon">
                    <a href="#booking">رزرو نوبت</a>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;