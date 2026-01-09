import { useState } from "react";
import { Users, GraduationCap, Briefcase } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import MemberCard from "@/components/ui/MemberCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const executives = [
  {
    name: "Ode Abdul Nazib",
    position: "Ketua Umum",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Afifah Nailah Rauf",
    position: "Sekretaris",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Nurul Mutia",
    position: "Bendahara",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Gerby Marpaung",
    position: "Ketua Comdev",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Muhammad Dien Usman",
    position: "Bendahara Comdev",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  },
];

const divisions = [
  {
    name: "Divisi Pengembangan Sumber Daya Manusia",
    head: "Resal Finanda",
    members: [
      "Wada'a Ghaizani",
      "Nurqalbi Salsabila",
      "Nurqalbi Putri Mulyani",
      "Helmi Yoralda",
    ],
  },
  {
    name: "Divisi Pendidikan dan Pengabdian Masyarakat",
    head: "Anniam Muliarta",
    members: [
      "Patrick Gian Yunarta Toding",
      "Reski Amelia syamsuddin",
      "Adelia Risqina Sadalia",
      "Nita Nuramalia",
    ],
  },
  {
    name: "Divisi Multimedia",
    head: "Ahmad Fachry Ismail",
    members: [
      "Muhammad Sadid Sukimin",
      "Arifah Deswina",
      "Mutiah Arinil Faysa Nusar",
      "Melani Djayanti",
    ],
  },
  {
    name: "Divisi Kesekretariatan",
    head: "Syifa Azzahra Razak",
    members: [
      "Muh. Taufan Sandi",
      "Mutmainnah Gusman",
      "Nursafitri",
      "Dina Safitri",
    ],
  },
  {
    name: "Divisi Sosial dan Lingkungan",
    head: "Muh. Syafik Fahrezi",
    members: ["Aisyah Putri Haris", "Aqila Zaizaafun Kurniawan"],
  },
];

const members = [
  {
    name: "Mampawa",
    department: "Teknik Elektro",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Nurul Ramadhan Rasul",
    department: "Kedokteran",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Mikran Hidayat",
    department: "Ilmu Aktuaria",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Indarwati Hamriani",
    department: "Hukum",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Bryan",
    department: "Teknik Sipil",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Nurul Hidayah",
    department: "Farmasi",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Eko Prasetyo",
    department: "Pertanian",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Lina Marlina",
    department: "FISIP",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face",
  },
];

const alumni = [
  {
    name: "Dr. Irwan Maulana",
    batch: "Angkatan 2010",
    position: "Dosen UNHAS",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Ir. Sari Dewanti",
    batch: "Angkatan 2011",
    position: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "apt. Rahmat Hidayat",
    batch: "Angkatan 2012",
    position: "Apoteker",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Dwi Anggraini, S.E.",
    batch: "Angkatan 2013",
    position: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Andi Firmansyah, S.T.",
    batch: "Angkatan 2014",
    position: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "dr. Putri Wulandari",
    batch: "Angkatan 2015",
    position: "Dokter",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
  },
];

const Anggota = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Anggota Kami
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Keluarga besar PKSE UNHAS dari berbagai fakultas dan angkatan
          </p>
        </div>
      </section>

      {/* Executives Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <SectionTitle
            subtitle="Pengurus Inti"
            title="Kabinet Cakrawala 2025/2026"
            description="Para pemimpin yang mengarahkan organisasi menuju visi bersama"
          />

          <div className="flex flex-wrap justify-center gap-12 mt-12">
            {executives.map((exec, index) => (
              <MemberCard key={index} {...exec} isLeader={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="section-container">
          <SectionTitle
            subtitle="Struktur Organisasi"
            title="Divisi & Tim Kerja"
            description="Setiap divisi berperan penting dalam menjalankan program kerja organisasi"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12 ">
            {divisions.map((division, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {division.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      Koordinator : {division.head}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {division.members.map((member, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members & Alumni Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <Tabs defaultValue="members" className="w-full">
            <div className="flex flex-col items-center mb-12">
              <SectionTitle
                subtitle="Daftar Lengkap"
                title="Anggota & Alumni"
              />
              <TabsList className="mt-8 bg-secondary p-1">
                <TabsTrigger
                  value="members"
                  className="flex items-center gap-2 px-6"
                >
                  <Users className="w-4 h-4" />
                  Anggota Aktif
                </TabsTrigger>
                <TabsTrigger
                  value="alumni"
                  className="flex items-center gap-2 px-6"
                >
                  <GraduationCap className="w-4 h-4" />
                  Alumni
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="members">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((member, index) => (
                  <MemberCard
                    key={index}
                    name={member.name}
                    department={member.department}
                    image={member.image}
                  />
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                Dan 50+ anggota aktif lainnya dari berbagai fakultas
              </p>
            </TabsContent>

            <TabsContent value="alumni">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {alumni.map((alum, index) => (
                  <div key={index} className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden shadow-card">
                      <img
                        src={alum.image}
                        alt={alum.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-display font-semibold text-foreground">
                      {alum.name}
                    </h4>
                    <p className="text-primary text-sm font-medium">
                      {alum.position}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {alum.batch}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                Dan 100+ alumni yang tersebar di seluruh Indonesia
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Anggota;
