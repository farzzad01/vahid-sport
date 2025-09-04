import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "پیام شما ارسال شد",
        description: "به زودی با شما تماس خواهیم گرفت",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">تماس با ما</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            برای مشاوره رایگان و رزرو نوبت با ما در ارتباط باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse text-primary">
                  <Phone className="w-5 h-5" />
                  <span>تماس مستقیم</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white mb-2">۰۹۱۲-۳۴۵-۶۷۸۹</p>
                <p className="text-muted-foreground">پاسخگویی ۲۴ ساعته</p>
              </CardContent>
            </Card>

            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse text-primary">
                  <MapPin className="w-5 h-5" />
                  <span>آدرس مغازه</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-2">قم، خیابان معلم، پلاک ۱۲۳</p>
                <p className="text-muted-foreground">جنب بانک ملی</p>
              </CardContent>
            </Card>

            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 space-x-reverse text-primary">
                  <Clock className="w-5 h-5" />
                  <span>ساعات کاری</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-white">
                  <div className="flex justify-between">
                    <span>شنبه تا پنج‌شنبه:</span>
                    <span>۸:۰۰ - ۲۰:۰۰</span>
                  </div>
                  <div className="flex justify-between">
                    <span>جمعه:</span>
                    <span>۱۴:۰۰ - ۲۰:۰۰</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="flex space-x-4 space-x-reverse">
              <Button size="lg" variant="outline" className="btn-ghost-neon flex-1">
                <Instagram className="w-5 h-5 ml-2" />
                اینستاگرام
              </Button>
              <Button size="lg" variant="outline" className="btn-ghost-neon flex-1">
                <MessageCircle className="w-5 h-5 ml-2" />
                واتساپ
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-neon">
              <CardHeader>
                <CardTitle className="text-2xl neon-text">فرم تماس و رزرو نوبت</CardTitle>
                <CardDescription>
                  اطلاعات خود را وارد کنید تا در اسرع وقت با شما تماس بگیریم
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">نام و نام خانوادگی</Label>
                      <Input 
                        id="name" 
                        placeholder="نام خود را وارد کنید"
                        className="bg-background/50 border-border text-white"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">شماره تماس</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="۰۹۱۲-۳۴۵-۶۷۸۹"
                        className="bg-background/50 border-border text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="car" className="text-white">مدل خودرو</Label>
                    <Input 
                      id="car" 
                      placeholder="مثال: پژو ۲۰۶، سمند، ۴۰۵"
                      className="bg-background/50 border-border text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">نوع خدمت مورد نیاز</Label>
                    <Input 
                      id="service" 
                      placeholder="نصب شیشه دودی، لوازم جانبی، ..."
                      className="bg-background/50 border-border text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">توضیحات اضافی</Label>
                    <Textarea 
                      id="message" 
                      placeholder="توضیحات بیشتر در مورد درخواست شما..."
                      className="bg-background/50 border-border text-white min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-neon text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "در حال ارسال..." : "ارسال درخواست"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;