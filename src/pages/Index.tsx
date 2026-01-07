import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import StatCard from "@/components/ui/StatCard";
import ActivityCard from "@/components/ui/ActivityCard";
import heroBg from "@/assets/hero-bg.jpg";

const activities = [
  {
    title: "Bakti Sosial di Desa Terpencil",
    description: "Kegiatan pengabdian masyarakat dengan memberikan bantuan pendidikan dan kesehatan di desa-desa terpencil Sulawesi Selatan.",
    date: "15 November 2024",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
  },
  {
    title: "Seminar Kepemimpinan Mahasiswa",
    description: "Workshop pengembangan soft skills dan kepemimpinan untuk seluruh anggota PKSE UNHAS bersama praktisi profesional.",
    date: "28 Oktober 2024",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  },
  {
    title: "Gathering Alumni & Anggota Aktif",
    description: "Acara silaturahmi tahunan yang mempertemukan alumni dengan anggota aktif untuk berbagi pengalaman dan networking.",
    date: "5 September 2024",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="PKSE UNHAS"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Content */}
        <div className="relative z-10 section-container text-center text-primary-foreground py-32">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-sm font-medium mb-6">
              Kabinet Cahaya Harapan 2024/2025
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            PAGUYUBAN KSE
            <br />
            <span className="text-aqua-200">UNHAS</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            "Bersama Berkarya, Bersama Berjaya"
          </p>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Wadah pengembangan diri bagi penerima beasiswa Karya Salemba Empat di Universitas Hasanuddin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
              <Link to="/tentang" className="flex items-center gap-2">
                Tentang Kami <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
              <Link to="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Chairman Welcome Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-aqua-lg">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                  alt="Ketua Umum PKSE UNHAS"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-2xl -z-10" />
            </div>

            <div className="space-y-6">
              <SectionTitle
                subtitle="Sambutan Ketua Umum"
                title="Membangun Generasi Unggul Bersama"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Assalamualaikum Warahmatullahi Wabarakatuh,
                </p>
                <p>
                  Puji syukur kita panjatkan kepada Tuhan Yang Maha Esa atas segala rahmat dan karunia-Nya. Sebagai Ketua Umum PKSE UNHAS periode 2024/2025, saya menyambut dengan hangat seluruh pengunjung website resmi kami.
                </p>
                <p>
                  Paguyuban KSE UNHAS merupakan wadah bagi kami para penerima beasiswa Karya Salemba Empat untuk terus berkembang, berkarya, dan memberikan kontribusi nyata kepada masyarakat. Mari bersama-sama kita wujudkan generasi yang berintegritas dan berdampak positif.
                </p>
              </div>
              <div className="pt-4">
                <p className="font-display font-semibold text-lg text-foreground">Muhammad Akbar</p>
                <p className="text-primary font-medium">Ketua Umum PKSE UNHAS 2024/2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="150+" label="Anggota Aktif" icon={<Users className="w-7 h-7" />} />
            <StatCard value="500+" label="Total Alumni" icon={<Award className="w-7 h-7" />} />
            <StatCard value="50+" label="Kegiatan/Tahun" icon={<BookOpen className="w-7 h-7" />} />
            <StatCard value="15" label="Tahun Berdiri" icon={<Heart className="w-7 h-7" />} />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="section-container">
          <SectionTitle
            subtitle="Kegiatan Kami"
            title="Aktivitas & Program Terbaru"
            description="Berbagai kegiatan yang telah kami laksanakan untuk pengembangan anggota dan kontribusi kepada masyarakat"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-semibold">
              Lihat Semua Kegiatan <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Bergabung Bersama Kami
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari keluarga besar PKSE UNHAS dan kembangkan potensi terbaikmu bersama kami.
          </p>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
            <Link to="/kontak" className="flex items-center gap-2">
              Hubungi Kami <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
