"use client";
import React from "react";
import { motion } from "framer-motion";

const Experties = () => {
  return (
    <motion.div
      className="overflow-x-auto mx-5 my-6 flex flex-col justify-center items-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: { visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <h1 className="text-5xl mb-3 text-amber-400 text-shadow-gray-100 poppins-medium w-full flex justify-center items-center">
        Practice Areas
      </h1>
      <table className="sm:w-[90%] w-full border-collapse">
        <thead>
          <tr className="border-t even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold">Law Field</th>
            <th className="border px-4 py-2 text-left font-bold">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Corporate Law</td>
            <td className="border px-4 py-2">
              Advising businesses on corporate governance&#44; compliance&#44;
              mergers&#44; acquisitions&#44; and shareholder agreements.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Commercial Law</td>
            <td className="border px-4 py-2">
              Handling transactions&#44; contracts&#44; and disputes related to
              business operations&#44; including sales&#44; leases&#44; and
              partnerships.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Criminal Law</td>
            <td className="border px-4 py-2">
              Defending clients in criminal cases&#44; including felonies&#44;
              misdemeanors&#44; and white-collar crimes&#44; with a focus on
              protecting their rights.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Family Law</td>
            <td className="border px-4 py-2">
              Providing legal assistance in matters such as divorce&#44; child
              custody&#44; adoption&#44; and domestic violence issues.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Civil Litigation</td>
            <td className="border px-4 py-2">
              Representing clients in various civil disputes&#44; including
              personal injury&#44; property damage&#44; and breach of contract
              cases.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Intellectual Property Law</td>
            <td className="border px-4 py-2">
              Protecting clients&#39; intellectual property rights&#44;
              including trademarks&#44; copyrights&#44; patents&#44; and trade
              secrets.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Employment Law</td>
            <td className="border px-4 py-2">
              Advising employers and employees on workplace rights&#44;
              discrimination claims&#44; wage and hour laws&#44; and employment
              contracts.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Real Estate Law</td>
            <td className="border px-4 py-2">
              Handling transactions involving residential and commercial
              properties&#44; zoning issues&#44; and disputes related to
              property ownership.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Tax Law</td>
            <td className="border px-4 py-2">
              Providing guidance on tax compliance&#44; planning&#44; and
              disputes with tax authorities at the federal&#44; state&#44; and
              local levels.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Bankruptcy Law</td>
            <td className="border px-4 py-2">
              Assisting clients in filing for bankruptcy&#44; negotiating with
              creditors&#44; and navigating debt relief options.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Environmental Law</td>
            <td className="border px-4 py-2">
              Advising on compliance with environmental regulations&#44;
              handling disputes related to land use&#44; and representing
              clients in environmental litigation.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Health Care Law</td>
            <td className="border px-4 py-2">
              Providing legal support to healthcare providers regarding
              compliance with regulations&#44; patient rights&#44; and liability
              issues.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Cyber Law</td>
            <td className="border px-4 py-2">
              Advising businesses and individuals on data protection&#44;
              privacy issues&#44; cybersecurity compliance&#44; and
              internet-related legal matters.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">International Law</td>
            <td className="border px-4 py-2">
              Providing legal guidance on cross-border transactions&#44;
              international treaties&#44; and compliance with foreign laws.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Immigration Law</td>
            <td className="border px-4 py-2">
              Assisting individuals and businesses with visa applications&#44;
              residency&#44; citizenship issues&#44; and immigration-related
              disputes.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">
              Alternative Dispute Resolution (ADR)
            </td>
            <td className="border px-4 py-2">
              Offering mediation and arbitration services to resolve disputes
              outside of traditional court proceedings.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Constitutional Law</td>
            <td className="border px-4 py-2">
              Advocating for clients&#39; rights and interests in matters
              involving constitutional issues&#44; civil liberties&#44; and
              government actions.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Administrative Law</td>
            <td className="border px-4 py-2">
              Representing clients in disputes with government agencies&#44;
              including regulatory compliance and licensing issues.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Consumer Protection Law</td>
            <td className="border px-4 py-2">
              Helping clients with disputes regarding consumer rights&#44;
              unfair business practices&#44; and product liability claims.
            </td>
          </tr>
          <tr className="border-t even:bg-muted">
            <td className="border px-4 py-2">Sports and Entertainment Law</td>
            <td className="border px-4 py-2">
              Providing legal services to athletes&#44; entertainers&#44; and
              businesses in the sports and entertainment industries&#44;
              including contracts and rights management.
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default Experties;
