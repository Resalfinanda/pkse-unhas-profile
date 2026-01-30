import { Users, GraduationCap, Briefcase } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionTitle from "@/components/ui/SectionTitle";
import MemberCard from "@/components/ui/MemberCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useExecutives } from "@/hooks/useExecutives";
import { useMembers } from "@/hooks/useMember";
import { useDivisions } from "@/hooks/useDivisions";
import { useAlumni } from "@/hooks/useAlumni";
import LoadingSpinner from "@/components/ui/Loading";

const Anggota = () => {
  const { data: executives, loading: execLoading } = useExecutives();
  const { data: members, loading: memberLoading } = useMembers();
  const { data: divisions, loading: divLoading } = useDivisions();
  const { data: alumni, loading: alumniLoading } = useAlumni();

  const isLoading = execLoading || memberLoading || divLoading || alumniLoading;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="w-[100dvw] flex justify-center h-[50dvh] items-center">
          <LoadingSpinner />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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

      {/* Executives */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <SectionTitle
            subtitle="Pengurus Inti"
            title="Kabinet Cakrawala 2025/2026"
            description="Para pemimpin yang mengarahkan organisasi menuju visi bersama"
          />

          <div className="flex flex-wrap justify-center gap-12 mt-12">
            {executives.map((exec, index) => (
              <MemberCard
                key={exec.id}
                name={exec.name}
                position={exec.position}
                department={exec.prodi}
                image={exec.image_url}
                isLeader={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="section-container">
          <SectionTitle
            subtitle="Struktur Organisasi"
            title="Divisi & Tim Kerja"
            description="Setiap divisi berperan penting dalam menjalankan program kerja organisasi"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {divisions.map((division) => (
              <div
                key={division.id}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">
                      {division.name}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      Koordinator: {division.head_name}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {division.division_members.map((member, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {member.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members & Alumni */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <Tabs defaultValue="members">
            <div className="flex flex-col items-center mb-12">
              <SectionTitle
                subtitle="Daftar Lengkap"
                title="Anggota & Alumni"
              />

              <TabsList className="mt-8 bg-secondary p-1">
                <TabsTrigger value="members" className="flex gap-2 px-6">
                  <Users className="w-4 h-4" />
                  Anggota Aktif
                </TabsTrigger>
                <TabsTrigger value="alumni" className="flex gap-2 px-6">
                  <GraduationCap className="w-4 h-4" />
                  Alumni
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="members">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {members.map((member) => (
                  <MemberCard
                    key={member.id}
                    name={member.name}
                    department={member.prodi}
                    image={member.image_url}
                  />
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                {" "}
                Dan 50+ anggota aktif lainnya dari berbagai fakultas{" "}
              </p>
            </TabsContent>

            <TabsContent value="alumni">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {alumni.map((alum) => (
                  <div key={alum.id} className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-xl overflow-hidden shadow-card">
                      <img
                        src={alum.image_url}
                        alt={alum.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-display font-semibold">{alum.name}</h4>
                    <p className="text-primary text-sm">{alum.position}</p>
                    <p className="text-muted-foreground text-xs">
                      {alum.batch}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                {" "}
                Dan 100+ alumni yang tersebar di seluruh Indonesia{" "}
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
