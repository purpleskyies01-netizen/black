// app/portal/[id]/page.tsx
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import PersonalDossier from "@/components/PersonalDossier";
import EvidenceCarousel from "@/components/EvidenceCarousel";
import { victims } from "./lib/data";
import SternDemand from "@/components/SternDemand";

export default function PortalPage() {
  const victim = victims["wv-001"];

  if (!victim) notFound();

  const initialSeconds = victim.demand.deadlineHours * 3600;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-black to-red-950 p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <Countdown initialSeconds={initialSeconds} />
          <PersonalDossier victim={victim} />
          <EvidenceCarousel images={victim.images} />
          <SternDemand victim={victim} />
          <footer className="text-center text-red-500 font-bold text-sm">
            <p>DARKBLACKMAIL SYSTEM ACTIVE | NO ESCAPE | COMPLY OR BE RUINED</p>
          </footer>
        </div>
      </main>
    </>
  );
}
