import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Sun, Eye, Car, Wrench, Sparkles } from "lucide-react";
import tintingImage from "@/assets/tinting-service.jpg";
import accessoriesImage from "@/assets/accessories.jpg";

const Services = () => {
  const tintingBenefits = [
    {
      icon: Shield,
      title: "محافظت از پوست و چشم",
      description: "بلاک کردن ۹۹٪ از اشعه‌های مضر UV خورشید"
    },
    {
      icon: Sun,
      title: "خنک نگه داشتن کابین",
      description: "کاهش محسوس دمای داخل خودرو تا ۶۰٪"
    },
    {
      icon: Eye,
      title: "حریم خصوصی و امنیت",
      description: "جلوگیری از دید به داخل و افزایش امنیت"
    },
    {
      icon: Car,
      title: "زیبایی و استایل منحصر به فرد",
      description: "افزایش چشمگیر جذابیت ظاهری خودرو"
    },
    {
      icon: Shield,
      title: "افزایش مقاومت شیشه",
      description: "جلوگیری از پخش شدن خرده شیشه هنگام حوادث"
    },
    {
      icon: Sparkles,
      title: "کیفیت تضمین شده",
      description: "استفاده از بهترین برندهای جهانی با گارانتی کامل"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">خدمات تخصصی</span> ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ارائه بهترین خدمات نصب شیشه دودی و لوازم جانبی لوکس با استانداردهای جهانی
          </p>
        </div>

        {/* Main Tinting Service */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6 neon-text">
                نصب حرفه‌ای شیشه دودی
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                تخصص اصلی ما در نصب باکیفیت و دقیق شیشه دودی با بهترین متریال‌های روز دنیاست. 
                ما با سال‌ها تجربه و استفاده از تجهیزات مدرن، خدمات بی‌نظیری ارائه می‌دهیم.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {tintingBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 space-x-reverse p-4 card-neon">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="btn-neon" asChild>
                  <a href="#booking">رزرو نوبت</a>
                </Button>
                <Button size="lg" variant="outline" className="btn-ghost-neon" asChild>
                  <a href="#contact">مشاوره رایگان</a>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={tintingImage}
                  alt="نصب شیشه دودی حرفه‌ای"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card p-4 rounded-lg">
                    <p className="text-sm text-white/90">
                      <strong>انواع درصد تیرگی:</strong> ۲۰٪، ۳۵٪، ۵۰٪، ۷۰٪
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessories Section */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img
                  src={accessoriesImage}
                  alt="لوازم جانبی لوکس خودرو"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 neon-text">
                لوازم جانبی لوکس
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                مجموعه‌ای منتخب از بهترین لوازم جانبی خودرو برای تکمیل زیبایی و عملکرد خودروی شما
              </p>

              <div className="grid gap-4 mb-8">
                {[
                  "کفپوش‌های سه‌بعدی با کیفیت بالا",
                  "چراغ‌های اسپرت و تزئینی",
                  "روکش صندلی‌های چرم طبیعی",
                  "کیت‌های تنظیم نور",
                  "سیستم‌های صوتی حرفه‌ای"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 space-x-reverse p-3 card-neon">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-white">{item}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" variant="outline" className="btn-ghost-neon">
                مشاهده محصولات
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;