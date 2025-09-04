import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock gallery data - in a real app, this would come from a database
  const galleryItems = [
    {
      id: 1,
      category: "sedan",
      title: "پژو ۲۰۶ - شیشه دودی ۳۵٪",
      beforeImage: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400",
      afterImage: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400",
    },
    {
      id: 2,
      category: "suv",
      title: "تیگو ۷ - شیشه دودی ۲۰٪",
      beforeImage: "https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=400",
      afterImage: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400",
    },
    {
      id: 3,
      category: "sport",
      title: "BMW - شیشه دودی ۵۰٪",
      beforeImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
      afterImage: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400",
    },
    {
      id: 4,
      category: "sedan",
      title: "سمند - شیشه دودی ۳۵٪",
      beforeImage: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400",
      afterImage: "https://images.unsplash.com/photo-1571833008750-f10c9b0f2b3e?w=400",
    }
  ];

  const filters = [
    { id: "all", name: "همه", count: galleryItems.length },
    { id: "sedan", name: "سدان", count: galleryItems.filter(item => item.category === "sedan").length },
    { id: "suv", name: "شاسی بلند", count: galleryItems.filter(item => item.category === "suv").length },
    { id: "sport", name: "اسپرت", count: galleryItems.filter(item => item.category === "sport").length },
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">نمونه کارهای</span> ما
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            مشاهده نمونه‌کارهای حرفه‌ای ما در نصب شیشه دودی بر روی انواع خودروها
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={activeFilter === filter.id ? "btn-neon" : "btn-ghost-neon"}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
              <Badge variant="secondary" className="mr-2 bg-primary/20 text-primary border-primary/30">
                {filter.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card-neon p-6 animate-fade-in">
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              
              {/* Before/After Comparison */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="relative group">
                  <img
                    src={item.beforeImage}
                    alt="قبل از نصب"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-black/80 text-white text-sm px-2 py-1 rounded text-center">
                      قبل از نصب
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <img
                    src={item.afterImage}
                    alt="بعد از نصب"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="bg-primary/90 text-white text-sm px-2 py-1 rounded text-center">
                      بعد از نصب
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  {item.category === "sedan" && "سدان"}
                  {item.category === "suv" && "شاسی بلند"}
                  {item.category === "sport" && "اسپرت"}
                </Badge>
                <Button size="sm" variant="outline" className="btn-ghost-neon">
                  مشاهده جزئیات
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-ghost-neon">
            مشاهده بیشتر
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;