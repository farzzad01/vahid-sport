import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Sun, Eye } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=800&fit=crop"
          alt="خودروی اسپرت با شیشه دودی نصب شده"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-slide-up">
            <h1 className="heading-neon mb-6">
              استایل و امنیت
              <br />
              <span className="text-primary">زیر نور خورشید</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              مرکز تخصصی نصب شیشه دودی و لوازم جانبی لوکس خودرو در قم
              <br />
              با بهترین متریال‌های روز دنیا و خدمات حرفه‌ای
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="btn-neon text-lg px-8 py-6">
                <a href="#booking" className="flex items-center">
                  رزرو نوبت آنلاین
                  <ArrowLeft className="mr-2 w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="btn-ghost-neon text-lg px-8 py-6">
                <a href="#gallery">مشاهده نمونه کارها</a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 space-x-reverse p-4 card-neon">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">محافظت ۹۹٪</h3>
                  <p className="text-sm text-muted-foreground">از اشعه UV مضر</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 space-x-reverse p-4 card-neon">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Sun className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">خنک‌سازی</h3>
                  <p className="text-sm text-muted-foreground">کاهش ۶۰٪ گرما</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 space-x-reverse p-4 card-neon">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">حریم خصوصی</h3>
                  <p className="text-sm text-muted-foreground">امنیت کامل</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;