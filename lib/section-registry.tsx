import Hero from "@/components/sections/Hero";
import Proof from "@/components/sections/Proof";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Properties from "@/components/sections/Properties";
import Method from "@/components/sections/Method";
import FinalCta from "@/components/sections/FinalCta";
import Contact from "@/components/sections/Contact";

export const sectionRegistry: Record<string, React.ComponentType> = {
  hero: Hero,
  proof: Proof,
  services: Services,
  about: About,
  properties: Properties,
  method: Method,
  "final-cta": FinalCta,
  contact: Contact,
};
