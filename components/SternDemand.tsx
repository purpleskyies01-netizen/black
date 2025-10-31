/* eslint-disable @typescript-eslint/no-explicit-any */
// components/SternDemand.tsx
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function SternDemand({ victim }: { victim: any }) {
  const contactLines = victim.demand.contact.split("\n");

  return (
    <div className="bg-red-950 border-4 border-red-800 rounded-xl shadow-2xl overflow-hidden">
      {/* Header – Red Alert Bar */}
      <div className="bg-red-900 px-4 py-3 flex items-center justify-center gap-2">
        <AlertCircle className="w-6 h-6 text-white animate-pulse" />
        <h3 className="text-xl font-black text-white uppercase tracking-widest">
          FINAL ULTIMATUM
        </h3>
        <AlertCircle className="w-6 h-6 text-white animate-pulse" />
      </div>

      <div className="p-4 sm:p-6 space-y-5 text-white">
        {/* Task – Bold, auto-wrap */}
        <p className="text-sm sm:text-base font-bold text-yellow-300 leading-snug text-center">
          {victim.demand.task}
        </p>

        {/* Contact Info – Clean Card */}
        <div className="bg-black/50 backdrop-blur-sm border border-red-700 rounded-lg p-4">
          <p className="text-xs font-semibold text-red-400 uppercase mb-2">
            Compliance Target
          </p>
          <div className="space-y-1 text-xs sm:text-sm font-mono text-red-300">
            {contactLines.map((line: string, i: number) => (
              <p key={i} className="truncate">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Action Button – Full Width on Mobile */}
        <Button className="w-full bg-red-700 hover:bg-red-600 text-white font-black text-xs py-6 sm:py-7 tracking-wider transition-all">
          CONFIRM COMPLIANCE (UPLOAD PROOF)
        </Button>

        {/* Consequences – Icon List */}
        <div className="bg-red-900/50 border border-red-700 rounded-lg p-4">
          <p className="text-xs font-black text-red-400 uppercase text-center mb-3">
            NON-COMPLIANCE = TOTAL EXPOSURE
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-red-300">
            <li className="flex items-center gap-2">
              <span className="text-red-500">→</span>
              ALL FRIENDS LISTED ABOVE
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">→</span>
              PARENTS (ROBERT & LINDA MILLER)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">→</span>
              <span className="break-words">
                WEST VIRGINIA: Facebook, Snapchat, Instagram, Local Forums
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
