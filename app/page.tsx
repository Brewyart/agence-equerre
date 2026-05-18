import { sectionRegistry } from "@/lib/section-registry";
import sectionsConfig from "@/project/sections.json";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ScaleDecoration from "@/components/ui/ScaleDecoration";

export default function Home() {
  return (
    <>
      <Header />
      <ScaleDecoration />
      <main>
        {sectionsConfig.sections.map((key: string) => {
          const Section = sectionRegistry[key];

          if (!Section) {
            return (
              <section key={key} style={{ padding: "40px", color: "red" }}>
                Section inconnue : {key}
              </section>
            );
          }

          return <Section key={key} />;
        })}
      </main>
      <Footer />
    </>
  );
}
