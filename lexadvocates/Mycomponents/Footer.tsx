import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <Link
            href="/"
            aria-label="Go home"
            className="inline-flex items-center"
          >
            <div className="w-17 h-17  relative">
              <Image
                alt="logo"
                fill
                className="object-contain "
                src="/envelope.png"
              />
            </div>
          </Link>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              &quot; Ronel Lex Advocates and Consultants – Pioneers in legal
              innovation,
              <br />
              justice, and advocacy&quot;
            </p>
            <p className="mt-4 text-sm text-gray-800">
              RONEL LEX ADVOCATES AND CONSULTANTS is a premier law firm offering
              comprehensive legal services, combining tradition with
              forward-thinking solutions.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Category
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/#NEWS"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/About/#About"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/About/#History"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/About/#legalapproach"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Legal Approach
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/Contact"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/Services"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/Management"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">about</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/About/#mission"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/About/#vision"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/chatbot"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  Ai chat
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">Ronel Lex Advocates</p>
      </div>
    </div>
  );
};

export default Footer;
