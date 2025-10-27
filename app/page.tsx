import { Separator } from "@/components/layout";
import { About, Contacts, Hero, Portfolio } from "@/components/sections";

export default function Home() {
  return (
    <div className="h-full">
      <Hero />
      <Separator text="About" />
      <About />
      <Separator text="Portfolio" />
      <Portfolio />
      <Separator text="Contacts" />
      <Contacts />
    </div>
  );
}
