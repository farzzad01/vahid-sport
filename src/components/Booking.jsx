import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Car, User, Phone, MessageSquare, CheckCircle, MapPin, Shield } from "lucide-react";

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const services = [
    "نصب شیشه دودی کامل",
    "نصب شیشه دودی جلو",
    "نصب شیشه دودی عقب و کناری",
    "تعویض شیشه دودی",
    "نصب لوازم جانبی",
    "مشاوره رایگان"
  ];

  const timeSlots = [
    "۸:۰۰ - ۹:۰۰",
    "۹:۰۰ - ۱۰:۰۰", 
    "۱۰:۰۰ - ۱۱:۰۰",
    "۱۱:۰۰ - ۱۲:۰۰",
    "۱۴:۰۰ - ۱۵:۰۰",
    "۱۵:۰۰ - ۱۶:۰۰",
    "۱۶:۰۰ - ۱۷:۰۰",
    "۱۷:۰۰ - ۱۸:۰۰"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert("رزرو با موفقیت ثبت شد! در اسرع وقت با شما تماس خواهیم گرفت.");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        carModel: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
    } catch (error) {
      alert("خطا در ثبت رزرو. لطفاً دوباره تلاش کنید یا با ما تماس بگیرید.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">رزرو آنلاین</span> نوبت
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فرم زیر را تکمیل کنید تا در اسرع وقت برای تنظیم زمان مناسب با شما تماس بگیریم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="card-neon">
            <CardHeader>
              <CardTitle className="text-2xl neon-text flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                فرم رزرو نوبت
              </CardTitle>
              <CardDescription>
                اطلاعات خود را با دقت وارد کنید
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      نام و نام خانوادگی
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="نام کامل خود را وارد کنید"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      شماره تماس
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="۰۹۱۲-۳۴۵-۶۷۸۹"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>

                {/* Car Info */}
                <div className="space-y-2">
                  <Label htmlFor="carModel" className="flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    مدل خودرو
                  </Label>
                  <Input
                    id="carModel"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleInputChange}
                    placeholder="مثال: پژو ۲۰۶، سمند، پراید و..."
                    required
                    className="bg-background/50"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    نوع خدمت مورد نظر
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">انتخاب کنید...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      تاریخ مورد نظر
                    </Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      ساعت مورد نظر
                    </Label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">انتخاب کنید...</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    توضیحات اضافی (اختیاری)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="هر توضیح اضافی که لازم است..."
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full btn-neon text-lg py-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      در حال ثبت...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      ثبت رزرو
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-xl neon-text">اطلاعات تماس</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">تماس مستقیم</p>
                    <p className="text-muted-foreground">۰۹۱۲-۳۴۵-۶۷۸۹</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">آدرس مرکز</p>
                    <p className="text-muted-foreground">قم، خیابان اصلی، پلاک ۱۲۳</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">ساعات کاری</p>
                    <p className="text-muted-foreground">شنبه تا پنج‌شنبه: ۸ تا ۱۸</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-xl neon-text">مزایای رزرو آنلاین</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "تضمین زمان دقیق خدمات",
                    "مشاوره رایگان قبل از نصب",
                    "تخفیف ویژه برای رزرو آنلاین",
                    "امکان تغییر زمان تا ۲۴ ساعت قبل",
                    "پیگیری وضعیت از طریق پیامک"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-primary mb-2">تماس اضطراری</h3>
              <p className="text-sm text-muted-foreground mb-3">
                برای موارد فوری یا مشکلات خارج از ساعات کاری
              </p>
              <Button variant="outline" size="sm" className="btn-ghost-neon">
                <Phone className="w-4 h-4 mr-2" />
                ۰۹۱۲-۱۱۱-۲۲۲۲
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;