// components/SternDemand.tsx
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SternDemand({ victim }: { victim: any }) {
  return (
    <Alert className="bg-red-950 border-4 border-red-800 text-white shadow-2xl">
      <AlertTitle className="text-3xl font-black text-red-400 uppercase tracking-widest">
        FINAL ULTIMATUM
      </AlertTitle>
      <AlertDescription className="mt-4 space-y-4 text-lg">
        <p className="font-bold text-yellow-300">{victim.demand.task}</p>
        <div className="bg-black p-4 rounded-lg font-mono text-sm">
          <pre className="whitespace-pre-wrap text-red-300">
            {victim.demand.contact}
          </pre>
        </div>
        <div className="text-center">
          <Button className="bg-red-700 hover:bg-red-600 text-white font-black text-lg px-8 py-6">
            CONFIRM COMPLIANCE (UPLOAD PROOF)
          </Button>
        </div>
        <p className="text-red-400 font-black uppercase text-center mt-4">
          NON-COMPLIANCE = NUDES SENT TO:
          <br />
          • ALL FRIENDS ABOVE
          <br />
          • PARENTS (ROBERT & LINDA MILLER)
          <br />• WEST VIRGINIA FACEBOOK GROUPS, SNAPCHAT, INSTAGRAM, LOCAL
          FORUMS
        </p>
      </AlertDescription>
    </Alert>
  );
}
