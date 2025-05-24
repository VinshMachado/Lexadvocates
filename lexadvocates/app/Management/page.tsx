import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const Teamcard = (Props: any) => {
  const specializations: Array<string> = Props.specalizations;

  return (
    <div className="p-4 md:p-10 max-w-3xl sm:w-1/3 mx-auto">
      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-amber-500 mb-1">
            {Props.name}
          </h1>
          <p className="text-md text-gray-700 font-medium mb-2">
            {Props.designation}
          </p>
          <p className="text-sm text-gray-600 mb-4">{Props.qualifications}</p>
          <h2 className="text-lg font-semibold mb-2">Specializations:</h2>
          <div className="flex flex-wrap gap-2">
            {specializations.map((item: string, index: number) => (
              <Badge key={index} className="bg-blue-100 text-blue-800">
                {item}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const page = () => {
  const data = [
    {
      name: "Roshan Melwyn Lobo",
      designation: "Advocate",
      qualifications: "B’Com., LL.B., M.B.A., LL.M.",
      specializations: [
        "Civil Litigation",
        "Criminal Law",
        "Family Law",
        "Employment Law",
        "Real Estate Law",
        "Education Law",
        "Constitutional Law",
        "Administrative Law",
      ],
    },
    {
      name: "Ajay R",
      designation: "Advocate",
      qualifications: "B.A (Law), LL.B.",
      specializations: [
        "Criminal Law",
        "Civil Litigation",
        "Real Estate Law",
        "Health Care Law",
        "Immigration Law",
        "Service Law",
      ],
    },
    {
      name: "Karthik Lokare",
      designation: "Advocate",
      qualifications: "B’Com., LL.B., LL.M.",
      specializations: [
        "Civil Litigation",
        "Family Law",
        "Criminal Law",
        "Real Estate Law",
        "Constitutional Law",
        "Consumer Protection Law",
        "Administrative Law",
      ],
    },
    {
      name: "Clavina G Rodrigues",
      designation: "Advocate",
      qualifications: "B.A. (Law), LL.B.",
      specializations: [
        "Corporate Law",
        "Commercial Law",
        "Intellectual Property Law",
        "Bankruptcy Law",
        "Consumer Protection Law",
        "Alternative Dispute Resolution (ADR)",
        "Tax Law",
      ],
    },
    {
      name: "Roshan R.",
      designation: "H.R and Accountant",
      qualifications: "M.Com.",
      specializations: [],
    },
    {
      name: "Rishal D’Souza",
      designation: "Paralegal",
      qualifications: "B.B.A.(Law), LL.B.",
      specializations: [],
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex  flex-wrap">
        {data.map((item) => {
          return (
            <Teamcard
              name={item.name}
              qualifications={item.qualifications}
              specalizations={item.specializations}
              designation={item.designation}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
