import { useState } from "react";
import { Camera } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";

const categories = ["Semua", "Bakti Sosial", "Seminar", "Gathering", "Pelatihan", "Lomba"];

const galleryItems = [
  { id: 1, title: "Bakti Sosial Desa Bonto", category: "Bakti Sosial", year: "2024", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop" },
  { id: 2, title: "Seminar Kepemimpinan", category: "Seminar", year: "2024", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop" },
  { id: 3, title: "Gathering Alumni 2024", category: "Gathering", year: "2024", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop" },
  { id: 4, title: "Pelatihan Public Speaking", category: "Pelatihan", year: "2024", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" },
  { id: 5, title: "Lomba Debat Nasional", category: "Lomba", year: "2023", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop" },
  { id: 6, title: "Baksos Anak Yatim", category: "Bakti Sosial", year: "2023", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop" },
  { id: 7, title: "Workshop Design Thinking", category: "Pelatihan", year: "2023", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop" },
  { id: 8, title: "Seminar Karir Alumni", category: "Seminar", year: "2023", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" },
  { id: 9, title: "Gathering Anggota Baru", category: "Gathering", year: "2023", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop" },
  { id: 10, title: "Baksos Pendidikan", category: "Bakti Sosial", year: "2024", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop" },
  { id: 11, title: "Pelatihan Excel", category: "Pelatihan", year: "2024", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" },
  { id: 12, title: "Lomba Essay", category: "Lomba", year: "2024", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=400&fit=crop" },
];

const Galeri = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems = activeCategory === "Semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Galeri Kegiatan
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Dokumentasi momen-momen berharga dari berbagai kegiatan PKSE UNHAS
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-secondary sticky top-16 md:top-20 z-40">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="font-medium"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden shadow-card card-hover bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display font-semibold text-primary-foreground text-lg">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">{item.year}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                Belum ada foto untuk kategori ini
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Galeri;
