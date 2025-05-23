"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const page = () => {
  const jobs = [
    {
      title: "Associate Lawyer",
      responsibilities:
        "Represent clients in court, conduct legal research, and draft legal documents.",
      qualifications:
        "Law degree and bar admission; experience in specific practice area preferred.",
    },
    {
      title: "Paralegal",
      responsibilities:
        "Assist lawyers in case preparation, conduct research, and manage case files.",
      qualifications:
        "Degree in paralegal studies or related field; strong organizational skills.",
    },
    {
      title: "Intern",
      responsibilities:
        "Support legal staff with research, drafting, and administrative tasks.",
      qualifications:
        "Currently pursuing a law degree; passion for the legal field.",
    },
    {
      title: "Administrative Staff",
      responsibilities:
        "Manage office operations, schedule appointments, and assist with client communications.",
      qualifications:
        "Strong communication and organizational skills; experience in a legal setting preferred.",
    },
  ];

  return (
    <motion.div
      className="p-4 md:p-10 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4 text-amber-400"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        Careers
      </motion.h1>

      <motion.section
        className="mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold mb-2">Why Work with Us?</h2>
        <p className="mb-2">
          At RONEL LEX ADVOCATES AND CONSULTANTS, we foster a collaborative and
          inclusive work environment where every team member is valued.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Collaboration and Teamwork:</strong> Diverse talents and
            ideas lead to innovative solutions across practice areas.
          </li>
          <li>
            <strong>Mentorship Opportunities:</strong> Junior lawyers are paired
            with experienced mentors for growth and guidance.
          </li>
          <li>
            <strong>Scope for Professional Development:</strong> Access to
            workshops, seminars, and training sessions.
          </li>
          <li>
            <strong>Work-Life Balance:</strong> Flexible work arrangements and
            supportive policies.
          </li>
        </ul>
      </motion.section>

      <Separator />

      <motion.section
        className="my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold mb-4 text-amber-400">
          Open Positions
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="rounded-2xl shadow-md h-full">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <p>
                    <strong>Responsibilities:</strong> {job.responsibilities}
                  </p>
                  <p>
                    <strong>Qualifications:</strong> {job.qualifications}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="mt-4">
          Interested candidates can submit their resumes and cover letters to{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:ronellexadvocates@gmail.com"
          >
            ronellexadvocates@gmail.com
          </a>
          .
        </p>
      </motion.section>

      <Separator />

      <motion.section
        className="my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold mb-4 text-amber-400">
          Internship Program
        </h2>
        <p>
          <strong>Program Overview:</strong> Interns work closely with the legal
          team, apply theory to practice, and gain real-world legal experience.
        </p>
        <p>
          <strong>Eligibility:</strong> Law students or recent graduates.
        </p>
        <p>
          <strong>Application Process:</strong> Apply by sending your resume and
          a cover letter to{" "}
          <a
            href="mailto:ronellexadvocates@gmail.com"
            className="text-blue-600 underline"
          >
            ronellexadvocates@gmail.com
          </a>
          . Applications are accepted on a rolling basis.
        </p>
      </motion.section>

      <Separator />

      <motion.section
        className="my-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold mb-4 text-amber-400">
          Professional Development
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Continuous Learning:</strong> Access to legal courses,
            workshops, and seminars.
          </li>
          <li>
            <strong>Legal Training Programs:</strong> In-house sessions on legal
            trends and best practices.
          </li>
          <li>
            <strong>Networking Opportunities:</strong> Attend conferences and
            events to build industry relationships.
          </li>
        </ul>
        <p className="mt-4">
          Join us in making a difference in the legal field while advancing your
          career. We look forward to welcoming you!
        </p>
      </motion.section>
    </motion.div>
  );
};

export default page;
