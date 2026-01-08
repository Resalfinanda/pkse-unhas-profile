import { Target, Eye, Handshake, Waypoints, Flame } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";

const historyTimeline = [
  {
    year: "2009",
    title: "Pendirian PKSE UNHAS",
    description:
      "Paguyuban KSE UNHAS didirikan oleh sekelompok mahasiswa penerima beasiswa KSE dengan visi membangun komunitas yang solid dan berdampak.",
  },
  {
    year: "2012",
    title: "Pengukuhan Organisasi Resmi",
    description:
      "PKSE UNHAS resmi dikukuhkan sebagai organisasi kemahasiswaan di Universitas Hasanuddin dengan struktur kepengurusan yang lebih terorganisir.",
  },
  {
    year: "2015",
    title: "Ekspansi Program Pengabdian",
    description:
      "Dimulainya program pengabdian masyarakat rutin yang menjangkau berbagai daerah di Sulawesi Selatan.",
  },
  {
    year: "2018",
    title: "Penghargaan Nasional",
    description:
      "PKSE UNHAS meraih penghargaan sebagai paguyuban KSE terbaik se-Indonesia dalam ajang pertemuan nasional KSE.",
  },
  {
    year: "2021",
    title: "Adaptasi Digital",
    description:
      "Bertransformasi dengan mengadopsi platform digital untuk kegiatan dan manajemen organisasi di era pandemi.",
  },
  {
    year: "2024",
    title: "Era Baru Kebangkitan",
    description:
      "Kabinet Cahaya Harapan memulai babak baru dengan fokus pada inovasi, kolaborasi, dan dampak sosial yang lebih luas.",
  },
];

const TentangKami = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tentang Kami
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Mengenal lebih dekat Paguyuban KSE UNHAS, perjalanan kami, dan visi
            misi yang kami emban
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                subtitle="Siapa Kami"
                title="Paguyuban KSE UNHAS"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">
                    Paguyuban Karya Salemba Empat Universitas Hasanuddin (PKSE
                    UNHAS)
                  </strong>{" "}
                  adalah organisasi kemahasiswaan yang mewadahi para penerima
                  beasiswa Karya Salemba Empat di Universitas Hasanuddin,
                  Makassar.
                </p>
                <p>
                  Beasiswa Karya Salemba Empat (KSE) merupakan program beasiswa
                  yang diberikan oleh Yayasan Karya Salemba Empat kepada
                  mahasiswa berprestasi dari keluarga kurang mampu di berbagai
                  perguruan tinggi di Indonesia.
                </p>
                <p>
                  PKSE UNHAS berdiri sebagai wadah bagi para penerima beasiswa
                  untuk saling mendukung, mengembangkan diri, dan berkontribusi
                  kepada masyarakat. Kami percaya bahwa dengan bersatu dan
                  berkolaborasi, kami dapat menciptakan dampak positif yang
                  lebih besar.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=500&fit=crop"
                alt="PKSE UNHAS Team"
                className="rounded-2xl shadow-aqua-lg w-full"
              />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="section-container">
          <SectionTitle
            subtitle="Arah & Tujuan"
            title="Visi & Misi"
            description="Panduan kami dalam berkarya dan berkontribusi untuk kemajuan bersama"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Vision Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Visi
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                "Mewujudkan PKSE UNHAS sebagai wadah aktualisasi diri dan
                kolaborasi dengan semangat sosial kekeluargaan, serta menjunjung
                nilai integritas."
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Misi
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    Menciptakan lingkungan paguyuban yang terbuka dan mendukung
                    aktualisasi diri.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    Mendorong partisipasi aktif dan kolaborasi dengan berbagai
                    pihak untuk memberikan dampak yang lebih luas dan
                    meningkatkan relasi.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    Memperkuat fondasi internal PKSE UNHAS berlandaskan semangat
                    kekeluargaan.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    Menjunjung nilai integritas melalui pelaksanaan program
                    kerja secara transparan, efektif, dan bertanggung jawab.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <SectionTitle
            subtitle="Perjalanan Kami"
            title="Sejarah PKSE UNHAS"
            description="Jejak langkah kami dalam membangun organisasi yang berdampak"
          />

          <div className="max-w-3xl mx-auto mt-12">
            {historyTimeline.map((item, index) => (
              <TimelineItem
                key={index}
                {...item}
                isLast={index === historyTimeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-gradient-primary text-primary-foreground">
        <div className="section-container">
          <SectionTitle
            subtitle="Nilai-Nilai Kami"
            title="Prinsip yang Kami Pegang"
            light
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Sharing</h3>
              <p className="text-primary-foreground/80">
                Mendorong penerima beasiswa (KSEwan) untuk saling berbagi ilmu,
                pengalaman, dan kepedulian, seringkali dalam bentuk kegiatan
                pengabdian masyarakat atau program komunitas.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Waypoints className="w-10 h-10" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                Networking
              </h3>
              <p className="text-primary-foreground/80">
                Membangun jejaring atau relasi yang kuat antar KSEwan di
                berbagai universitas se-Nusantara, serta dengan para donatur dan
                profesional, menciptakan komunitas yang solid.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                <Flame className="w-10 h-10" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">
                Developing
              </h3>
              <p className="text-primary-foreground/80">
                Memberikan program pengembangan diri komprehensif di luar
                beasiswa finansial, seperti Leadership, Career Coaching,
                Entrepreneur Academy, dan Technology For Indonesia untuk
                membentuk pribadi yang unggul.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TentangKami;
