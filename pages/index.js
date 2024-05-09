import Hero from "@/components/Hero";
import Templates from "@/components/Templates";
import Image from "next/image";

export default function Home() {
  return <>
    <Hero />
    <div className="py-2">
      <Templates />
    </div>
  </>
}
