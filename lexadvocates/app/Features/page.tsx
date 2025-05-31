"use client";
import FeaturesCard from "@/Mycomponents/FeaturesCard";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  const Data = [
    {
      title: " Appointment Scheduling",
      image: "/Icons/schedule.png",
      content1:
        "Our online appointment scheduling system allows clients to easily book consultations at their convenience.",
      content2:
        "With real-time availability updates, clients can choose suitable times for meetings without the back-and-forth of traditional scheduling methods. This efficiency saves time for both clients and our legal team.",
    },
    {
      title: " Live Chat",
      image: "/Icons/live-chat.png",
      content1:
        "The live chat feature on our website facilitates real-time communication between clients and our support staff.",
      content2:
        "Clients can quickly get answers to their inquiries, enhancing their experience and providing immediate assistance. This feature fosters greater engagement and builds trust in our commitment to client service.",
    },
    {
      title: " Mobile Responsiveness",
      image: "Icons/responsive-design.png",
      content1:
        "Our website is designed to be fully responsive, ensuring seamless navigation across all devices, including smartphones, tablets, and desktops.",
      content2:
        "This adaptability allows clients to access our services anytime, anywhere, enhancing user experience and convenience. A mobile-friendly design also supports better engagement with clients who prefer to use their devices for legal consultations and information.",
    },
  ];
  return (
    <>
      <motion.div
        className="w-full flex flex-col justify-center items-center h-auto"
        style={{ transformOrigin: "top center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          scale: { visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <h1 className="sm:text-5xl text-2xl mb-3 text-amber-400 text-shadow-gray-100  poppins-medium w-full flex justify-center items-center ">
          Features & Latest Technologies
        </h1>

        <div className="w-fit h-auto flex flex-wrap items-center justify-center">
          {Data.map((item) => {
            return (
              <FeaturesCard
                key={item.title}
                image={item.image}
                content1={item.content1}
                content2={item.content2}
                title={item.title}
              />
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default page;
