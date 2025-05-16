import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const History = () => {
  return (
    <div className="sm:m-10 m-5">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Our History
      </h2>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Founded on the pillars of integrity, excellence, and a forward-thinking
        approach to legal practice,&nbsp;RONEL LEX ADVOCATES AND
        CONSULTANTS&nbsp;was established with the vision of delivering
        unparalleled legal services to clients across diverse sectors. Since its
        inception, our chamber has been a trusted partner for individuals,
        businesses, and organizations seeking expert legal guidance and
        representation.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The law chamber was founded by&nbsp;Roshan Melwyn Lobo, a highly
        experienced advocate with an extensive background in legal advisory,
        litigation, and corporate law. Driven by a passion for justice and a
        commitment to innovation in the legal field, Roshan Melwyn Lobo set out
        to build a firm that combines traditional legal wisdom with the latest
        developments in the industry.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        What started as a modest practice has evolved into a full-service law
        firm, representing clients both locally and internationally. Over the
        years,&nbsp;RONEL LEX ADVOCATES AND CONSULTANTS&nbsp;has garnered a
        reputation for excellence in handling complex legal matters, from
        constitutional cases to cutting-edge issues in cyber law and corporate
        governance.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We pride ourselves on staying ahead of the curve, consistently updating
        our practice to align with the latest legal amendments and technological
        advancements. From significant reforms in criminal law to the emerging
        challenges of digital privacy and data protection, our chamber is at the
        forefront of legal transformation.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        As we continue to grow, our focus remains on providing personalized
        legal solutions that address the unique needs of each client. Our team
        of highly skilled advocates, legal researchers, and consultants are
        committed to upholding the highest standards of professionalism,
        ensuring that justice is served in every case we take on.
      </p>

      <p className="leading-7 [&:not(:first-child)]:mt-6">
        With a rich history of landmark case successes and a firm foundation
        built on trust,&nbsp;RONEL LEX ADVOCATES AND CONSULTANTS&nbsp;is poised
        to lead the future of law, offering innovative legal strategies that
        adapt to the changing landscape of the modern world.
      </p>

      {Accord()}
    </div>
  );
};

let Accord = () => {
  return (
    <div className="w-full  mt-5 mx-auto p-4 sm:p-8 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        Our Legal Approach
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        At&nbsp;RONEL LEX ADVOCATES AND CONSULTANTS, our legal approach is
        rooted in a client-centered philosophy, where every case is treated with
        meticulous care and personalized attention. We believe in delivering
        solutions that are not only legally sound but also pragmatic,
        forward-thinking, and aligned with our clients&apos; business or
        personal goals.
      </p>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-amber-600">
            Comprehensive Legal Expertise
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-base leading-relaxed">
            Our team of experienced advocates brings together a wealth of
            knowledge across diverse areas of law, from corporate and commercial
            litigation to constitutional and criminal defense. This
            multi-disciplinary strength allows us to craft innovative strategies
            for complex legal challenges.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-amber-600">
            Client-Centric Solutions
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-base leading-relaxed">
            Understanding that no two cases are the same, we tailor our legal
            services to meet the specific needs and objectives of each client.
            By maintaining open communication and transparency, we ensure that
            our clients are well-informed and involved at every stage of their
            legal journey.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-amber-600">
            Commitment to Excellence
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-base leading-relaxed">
            We are dedicated to upholding the highest standards of legal
            practice, delivering quality work and ethical representation. Our
            pursuit of excellence is supported by rigorous research, case
            preparation, and staying updated on legal developments.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-amber-600">
            Adaptability and Innovation
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-base leading-relaxed">
            In a dynamic legal world, we adapt swiftly to changes in laws and
            interpretations. By leveraging technology and modern legal tools, we
            offer solutions to legal challenges, including data privacy, cyber
            law, and corporate governance.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-amber-600">
            Alternative Dispute Resolution (ADR)
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-base leading-relaxed">
            Where suitable, we advocate cost-effective resolution methods such
            as mediation, arbitration, and negotiation — emphasizing amicable
            solutions without compromising justice.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-medium text-gray-900 hover:text-amber-600">
            Proactive Legal Advisory
          </AccordionTrigger>
          <AccordionContent className="text-gray-700 text-base leading-relaxed">
            Beyond courtroom representation, we offer legal advisory services
            that help clients with compliance, risk mitigation, and legal
            planning to prevent future issues.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default History;
