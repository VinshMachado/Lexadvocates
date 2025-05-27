import React from "react";

const MissionVision = () => {
  return (
    <section className="max-w-5xl mx-auto p-6 sm:p-1 sm:mt-7 space-y-10">
      {/* Mission */}
      <div id="mission">
        <h2 className="text-3xl font-bold mb-4 text-amber-600">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At <strong>RONEL LEX ADVOCATES AND CONSULTANTS</strong>, our mission
          is to uphold justice and provide cutting-edge legal solutions tailored
          to meet the unique needs of each client. We are committed to offering
          comprehensive legal services rooted in integrity, professionalism, and
          innovation.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Advocate for the rights of individuals and organizations with
            unwavering dedication.
          </li>
          <li>
            Stay at the forefront of legal developments and adapt to new
            amendments, ensuring our clients benefit from the latest in legal
            reform.
          </li>
          <li>
            Deliver effective and ethical legal representation, driven by a deep
            sense of responsibility to our clients and the community.
          </li>
          <li>
            Foster a culture of excellence, collaboration, and continuous
            learning to remain a trusted leader in the legal industry.
          </li>
        </ul>
        <p className="text-gray-700 mt-4">
          By blending traditional legal values with modern practices, we aim to
          create a lasting impact on the legal profession and society as a
          whole.
        </p>
      </div>

      {/* Vision */}
      <div id="vision">
        <h2 className="text-3xl font-bold mb-4 text-amber-600">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          At <strong>RONEL LEX ADVOCATES AND CONSULTANTS</strong>, our vision is
          to be a beacon of legal excellence, transforming the landscape of
          legal services with innovation, integrity, and a commitment to
          justice. We aim to establish ourselves as a leading law chamber that
          not only delivers exceptional legal counsel but also drives positive
          change in society through our advocacy and dedication to the rule of
          law.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Be at the forefront of legal reforms, continuously adapting to new
            regulations and technologies to offer cutting-edge solutions.
          </li>
          <li>
            Provide a platform where clients can rely on strategic,
            results-oriented advice tailored to their unique needs.
          </li>
          <li>
            Foster a collaborative environment where legal professionals can
            thrive, grow, and contribute meaningfully to the legal profession.
          </li>
          <li>
            Build a legacy of trust, ensuring that every client we represent
            experiences fairness, transparency, and ethical conduct in all our
            dealings.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MissionVision;
