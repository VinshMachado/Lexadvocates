"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      className="p-6 sm:p-10 space-y-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: { visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-amber-500">
        Knowledge Hub
      </h1>
      <div className="w-full h-[600px] relative flex justify-center items-center ">
        <Image
          src="/Preamble.png"
          alt="preamble"
          fill
          className="object-contain"
        />
      </div>

      <p className="text-center max-w-3xl mx-auto text-muted-foreground poppins-regular">
        At RONEL LEX ADVOCATES AND CONSULTANTS, we believe in the importance of
        continuous education and knowledge sharing. Our Knowledge Hub is
        designed to empower clients, legal professionals, and the public with
        valuable insights into the evolving landscape of law.
      </p>

      <Tabs defaultValue="blog" className="w-full">
        <TabsList className=" flex justify-center items-center w-full flex-wrap h-20">
          <TabsTrigger
            value="blog"
            className="bg-amber-400 text-black m-2 h-10"
          >
            Legal Blog
          </TabsTrigger>

          <TabsTrigger
            value="reports"
            className="bg-amber-400 text-black  m-2 h-10"
          >
            Law Reports
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="bg-amber-400 text-black  m-2 h-10"
          >
            Videos & Webinars
          </TabsTrigger>
          <TabsTrigger
            value="downloads"
            className="bg-amber-400 text-black  m-2 h-10"
          >
            Downloads
          </TabsTrigger>
        </TabsList>

        <TabsContent value="blog" className="mt-20 sm:mt-0">
          <Card>
            <CardContent className="space-y-4 p-6 ">
              <h2 className="text-xl font-semibold">
                Stay Informed with Our Legal Blog
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Recent Legislative Changes:</strong> Insights into new
                  laws and how they impact individuals and businesses.
                </li>
                <li>
                  <strong>Case Analysis:</strong> In-depth discussions of
                  landmark judgments and their implications for future legal
                  interpretations.
                </li>
                <li>
                  <strong>Expert Commentary:</strong> Perspectives from our
                  lawyers on pressing legal issues and evolving trends in
                  various fields of law.
                </li>
              </ul>
              <p>
                Subscribe to our blog for updates straight to your inbox and
                stay at the forefront of legal knowledge.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="mt-20 sm:mt-0">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold">
                Comprehensive Summaries of Landmark Judgments
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Case Background:</strong> Contextual information about
                  the case.
                </li>
                <li>
                  <strong>Judgment Summary:</strong> Key findings and legal
                  principles established by the court.
                </li>
                <li>
                  <strong>Implications:</strong> Analysis of how the judgment
                  affects existing laws and future cases.
                </li>
              </ul>
              <p>
                Stay informed about the judicial decisions that impact your
                rights and obligations.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos" className="mt-20 sm:mt-0">
          <Card>
            <CardContent className="space-y-6 p-6">
              <h2 className="text-xl font-semibold">
                Engaging Educational Content
              </h2>
              <div className="flex justify-center items-center flex-wrap w-full ">
                <Image
                  src="/Icons/content.png"
                  alt="Cyber Law"
                  width={200}
                  height={125}
                  className="rounded-xl m-10"
                />
                <Image
                  src="/Icons/content-writing.png"
                  alt="Criminal Law"
                  width={140}
                  height={100}
                  className="rounded-xl m-10"
                />
                <Image
                  src="/Icons/creative-writing.png"
                  alt="Live Q&A"
                  width={140}
                  height={100}
                  className="rounded-xl m-10"
                />
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Understanding Cyber Law Amendments:</strong> Covers
                  recent changes in data protection, privacy, and compliance.
                </li>
                <li>
                  <strong>Criminal Law Reforms:</strong> Explores implications
                  for defendants and the justice system.
                </li>
                <li>
                  <strong>Live Q&A Sessions:</strong> Engage with our experts
                  and gain clarity on complex legal issues.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="downloads" className="mt-20 sm:mt-0">
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-xl font-semibold">
                Access Valuable Legal Materials
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Whitepapers:</strong> In-depth analyses on legal
                  topics with insights and research.
                </li>
                <li>
                  <strong>Research Articles:</strong> Detailed articles authored
                  by our team and guest contributors.
                </li>
                <li>
                  <strong>Legal Briefs:</strong> Concise documents outlining key
                  legal issues and strategies.
                </li>
              </ul>
              <p>Download our resources to enhance your legal understanding.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default page;
