import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { toast } = useToast();

  // Test products data
  const products = [
    {
      id: 1,
      name: "کفپوش سه‌بعدی لاستیکی",
      category: "interior",
      price: 1200000,
      originalPrice: 1500000,
      rating: 4.8,
      reviews: 34,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400",
      description: "کفپوش سه‌بعدی با کیفیت بالا، مقاوم در برابر آب و لکه",
      features: ["ضد آب", "قابل شستشو", "نصب آسان", "گارانتی ۲ ساله"],
      stock: 15,
      isPopular: true
    },
    {
      id: 2,
      name: "چراغ LED هالوژن اسپرت",
      category: "lighting",
      price: 850000,
      originalPrice: null,
      rating: 4.6,
      reviews: 28,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400",
      description: "چراغ LED با نور سفید خالص و مصرف انرژی کم",
      features: ["نور سفید خالص", "مصرف کم", "عمر بالا", "نصب آسان"],
      stock: 8,
      isPopular: false
    },
    {
      id: 3,
      name: "روکش صندلی چرم طبیعی",
      category: "interior",
      price: 3200000,
      originalPrice: 3800000,
      rating: 4.9,
      reviews: 42,
      image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=400",
      description: "روکش صندلی از چرم طبیعی درجه یک با دوخت دستی",
      features: ["چرم طبیعی", "دوخت دستی", "تهویه مناسب", "گارانتی ۳ ساله"],
      stock: 5,
      isPopular: true
    },
    {
      id: 4,
      name: "اسپویلر اسپرت کربن",
      category: "exterior",
      price: 2100000,
      originalPrice: null,
      rating: 4.7,
      reviews: 19,
      image: "https://images.unsplash.com/photo-1563258042-ee3b8b3bb93d?w=400",
      description: "اسپویلر اسپرت از جنس کربن فایبر اصل",
      features: ["کربن فایبر", "وزن سبک", "مقاوم", "طراحی اروپایی"],
      stock: 3,
      isPopular: false
    },
    {
      id: 5,
      name: "سیستم صوتی حرفه‌ای",
      category: "audio",
      price: 4500000,
      originalPrice: 5200000,
      rating: 4.8,
      reviews: 15,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      description: "سیستم صوتی ۶ کاناله با ساب‌ووفر و آمپلی‌فایر",
      features: ["۶ کاناله", "ساب‌ووفر", "آمپلی‌فایر", "کنترل بلوتوث"],
      stock: 7,
      isPopular: true
    },
    {
      id: 6,
      name: "آینه‌های اسپرت کربنی",
      category: "exterior",
      price: 980000,
      originalPrice: null,
      rating: 4.5,
      reviews: 23,
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
      description: "آینه‌های جانبی با پوشش کربن و سیگنال LED",
      features: ["پوشش کربن", "سیگنال LED", "تنظیم برقی", "گرمکن داخلی"],
      stock: 12,
      isPopular: false
    }
  ];

  const categories = [
    { id: "all", name: "همه محصولات", count: products.length },
    { id: "interior", name: "داخلی خودرو", count: products.filter(p => p.category === "interior").length },
    { id: "exterior", name: "خارجی خودرو", count: products.filter(p => p.category === "exterior").length },
    { id: "lighting", name: "چراغ و روشنایی", count: products.filter(p => p.category === "lighting").length },
    { id: "audio", name: "سیستم صوتی", count: products.filter(p => p.category === "audio").length },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (product: any) => {
    toast({
      title: "محصول به سبد خرید اضافه شد",
      description: `${product.name} با موفقیت اضافه شد`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">محصولات</span> لوکس
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            بهترین لوازم جانبی خودرو با کیفیت اروپایی و قیمت مناسب
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={activeCategory === category.id ? "btn-neon" : "btn-ghost-neon"}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                <Badge variant="secondary" className="mr-2 bg-primary/20 text-primary border-primary/30">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="card-neon group hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.isPopular && (
                  <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                    محبوب
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive" className="absolute top-3 left-3">
                    تخفیف
                  </Badge>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="sm" variant="outline" className="btn-ghost-neon">
                    <Eye className="w-4 h-4 ml-2" />
                    مشاهده سریع
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg text-white group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center space-x-1 space-x-reverse">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-primary/50 text-primary">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline space-x-2 space-x-reverse">
                  <span className="text-2xl font-bold text-primary">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${product.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {product.stock > 0 ? `موجود (${product.stock} عدد)` : 'ناموجود'}
                  </span>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full btn-neon"
                  onClick={() => handleAddToCart(product)}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-4 h-4 ml-2" />
                  {product.stock > 0 ? 'افزودن به سبد خرید' : 'ناموجود'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-ghost-neon">
            مشاهده محصولات بیشتر
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;