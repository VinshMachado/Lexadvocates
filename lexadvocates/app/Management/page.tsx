"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
type TeamcardProps = {
  name: string;
  designation: string;
  qualifications: string;
  specialization: string[];
};
type StaffProps = {
  name: string;
  designation: string;
  qualifications: string;
};

const Teamcard = ({
  name,
  designation,
  qualifications,
  specialization,
}: TeamcardProps) => {
  const specializations: Array<string> = specialization;

  return (
    <motion.div
      style={{ transformOrigin: "top center" }}
      whileHover={{ scale: 1.1 }}
      className="p-4 md:p-10 max-w-3xl sm:w-1/3 mx-auto"
    >
      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-amber-500 mb-1">{name}</h1>
          <p className="text-md text-gray-700 font-medium mb-2">
            {designation}
          </p>
          <p className="text-sm text-gray-600 mb-4">{qualifications}</p>
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
    </motion.div>
  );
};

const StaffCard = ({ name, designation, qualifications }: StaffProps) => {
  return (
    <motion.div
      style={{ transformOrigin: "top center" }}
      whileHover={{ scale: 1.1 }}
      className="p-4 md:p-10 w-full m-3  sm:w-1/3 mx-auto"
    >
      <Card className="rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold text-amber-500 mb-1">{name}</h1>
          <p className="text-md text-gray-700 font-medium mb-2">
            {designation}
          </p>
          <p className="text-sm text-gray-600 mb-4">{qualifications}</p>
        </CardContent>
      </Card>
    </motion.div>
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
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          scale: { visualDuration: 0.4, bounce: 0.5 },
        }}
        className="w-full h-auto flex  flex-wrap justify-center items-center"
      >
        <h1 className="text-5xl mb-3 text-amber-400 text-shadow-gray-100  poppins-medium w-full flex justify-center items-center ">
          Meet Our Team
        </h1>
        {data.map((item, index) => {
          return (
            <Teamcard
              key={index}
              name={item.name}
              qualifications={item.qualifications}
              specialization={item.specializations}
              designation={item.designation}
            />
          );
        })}
        <StaffCard
          name="Roshan R."
          designation="H.R and Accountant"
          qualifications="M.Com."
        />
        <StaffCard
          name="Rishal D’Souza"
          designation="Paralegal"
          qualifications="B.B.A.(Law), LL.B."
        />
      </motion.div>
    </>
  );
};

export default page;
