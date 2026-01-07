import { useState } from "react";
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "#", handle: "@pkse_unhas" },
  { name: "Facebook", icon: Facebook, url: "#", handle: "PKSE UNHAS" },
  { name: "Twitter", icon: Twitter, url: "#", handle: "@pkse_unhas" },
  { name: "Youtube", icon: Youtube, url: "#", handle: "PKSE UNHAS Official" },
];

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pesan terkirim!", {
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hubungi Kami
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <SectionTitle
                subtitle="Informasi Kontak"
                title="Mari Terhubung"
                centered={false}
              />

              <div className="space-y-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Alamat</h4>
                    <p className="text-muted-foreground">
                      Sekretariat PKSE UNHAS<br />
                      Universitas Hasanuddin<br />
                      Jl. Perintis Kemerdekaan KM. 10<br />
                      Tamalanrea, Makassar 90245
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:pkse.unhas@gmail.com" className="text-primary hover:underline">
                      pkse.unhas@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">Telepon</h4>
                    <a href="tel:+6281234567890" className="text-primary hover:underline">
                      +62 812 3456 7890
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h4 className="font-display font-semibold text-lg text-foreground mb-4">
                  Ikuti Media Sosial Kami
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 group"
                    >
                      <social.icon className="w-6 h-6" />
                      <div>
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Kirim Pesan
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Perihal pesan Anda"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full font-semibold">
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary">
        <div className="section-container">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.603788571166!2d119.4863!3d-5.1347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefdc9ba6c82e9%3A0x4c28c7d78eab3a1c!2sHasanuddin%20University!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi UNHAS"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <SectionTitle
            subtitle="FAQ"
            title="Pertanyaan yang Sering Diajukan"
          />

          <div className="max-w-3xl mx-auto mt-12 space-y-4">
            {[
              {
                q: "Bagaimana cara bergabung dengan PKSE UNHAS?",
                a: "Untuk bergabung dengan PKSE UNHAS, Anda harus terlebih dahulu menjadi penerima beasiswa Karya Salemba Empat di Universitas Hasanuddin. Setelah itu, Anda akan otomatis terdaftar sebagai anggota PKSE UNHAS.",
              },
              {
                q: "Apakah ada biaya keanggotaan?",
                a: "Tidak ada biaya keanggotaan untuk PKSE UNHAS. Semua kegiatan dan program dibiayai melalui kontribusi sukarela dan dukungan dari alumni serta sponsor.",
              },
              {
                q: "Bagaimana cara mengikuti kegiatan PKSE UNHAS?",
                a: "Informasi kegiatan akan diumumkan melalui media sosial resmi dan grup komunikasi anggota. Anda dapat mendaftar sesuai dengan prosedur yang berlaku untuk setiap kegiatan.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card">
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontak;
