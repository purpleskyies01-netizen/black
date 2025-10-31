/* eslint-disable @typescript-eslint/no-explicit-any */
// components/PersonalDossier.tsx
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function PersonalDossier({ victim }: { victim: any }) {
  return (
    <div className="bg-gray-900 border-2 border-red-800 rounded-xl p-6 shadow-xl">
      <h2 className="text-red-500 font-black text-2xl mb-4 text-center uppercase">
        YOUR EXPOSED IDENTITY
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
        <div>
          <p>
            <strong>Name:</strong> {victim.name}{" "}
            <Badge variant="destructive">TARGET</Badge>
          </p>
          <p>
            <strong>Age:</strong> {victim.age}
          </p>
          <p>
            <strong>Email:</strong> {victim.email}
          </p>
          <p>
            <strong>Course:</strong> {victim.course}
          </p>
          <p>
            <strong>School:</strong> {victim.school}
          </p>
        </div>
        <div>
          <p>
            <strong>Father:</strong> {victim.fatherName}
          </p>
          <p>
            <strong>Mother:</strong> {victim.motherName}
          </p>
          <p>
            <strong>SSN:</strong> {victim.ssn}
          </p>
          <p>
            <strong>IP PIN:</strong> {victim.tin}
          </p>
          <p>
            <strong>Address:</strong> {victim.address}
          </p>
        </div>
      </div>
      <Separator className="my-4 bg-red-800" />
      <div>
        <p className="text-red-400 font-bold">
          FRIENDS & FAMILY (WILL RECEIVE NUDES):
        </p>
        <ul className="text-sm text-red-300 space-y-1 mt-2">
          {victim.classmates.map((c: any, i: number) => (
            <li key={i}>
              • {c.name} &lt;{c.email}&gt;
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
