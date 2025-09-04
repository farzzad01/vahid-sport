import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold neon-text">اسپرت وحید</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              مرکز تخصصی نصب شیشه دودی و لوازم جانبی لوکس خودرو در قم
            </p>
            <p className="text-sm text-muted-foreground">
              © ۱۴۰۳ اسپرت وحید. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;