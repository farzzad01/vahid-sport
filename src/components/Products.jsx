import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Eye } from "lucide-react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

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
    }
  ];

  const categories = [
    { id: "all", name: "همه محصولات", count: products.length },
    { id: "interior", name: "داخلی خودرو", count: products.filter(p => p.category === "interior").length },
    { id: "lighting", name: "چراغ و روشنایی", count: products.filter(p => p.category === "lighting").length },
  ];

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (product) => {
    alert(`${product.name} به سبد خرید اضافه شد`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">محصولات</span> لوکس
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            بهترین لوازم جانبی خودرو با کیفیت اروپایی و قیمت مناسب
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
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
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-primary/50 text-primary">
                      {feature}
                    </Badge>
                  ))}
                </div>

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

                <div className="flex items-center justify-between">
                  <span className={`text-sm ${product.stock > 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {product.stock > 0 ? `موجود (${product.stock} عدد)` : 'ناموجود'}
                  </span>
                </div>

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
      </div>
    </section>
  );
};

export default Products;