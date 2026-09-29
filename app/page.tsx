import { sectionRegistry } from "@/lib/section-registry";
import { siteUrl } from "@/lib/site";
import sectionsConfig from "@/project/sections.json";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import ScaleDecoration from "@/components/ui/ScaleDecoration";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Agence de l'Equerre",
    url: `${siteUrl}/`,
    telephone: "+3210453669",
    email: "info@agence-equerre.be",
    foundingDate: "2003",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Place de l'Equerre 29/102",
      postalCode: "1348",
      addressLocality: "Louvain-la-Neuve",
      addressCountry: "BE",
    },
    areaServed: ["Brabant wallon", "Namur", "Bruxelles", "Knokke-Heist"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <ScaleDecoration />
      <main id="main-content">
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
