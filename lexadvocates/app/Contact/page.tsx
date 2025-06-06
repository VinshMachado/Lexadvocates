"use client";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
export default function Page() {
  const [gmail, setgmail] = useState<String>();
  const [message, setmessage] = useState<String>();
  const [name, setname] = useState<String>();
  const [phone, setphone] = useState<Number>();

  const sendData = async () => {
    await fetch("/api/mailer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        gmail: gmail,
        number: phone,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((data: any) => {
        console.log(data);
      });
  };

  return (
    <motion.div
      style={{ transformOrigin: "top center" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        scale: { visualDuration: 0.4, bounce: 0.5 },
      }}
      className="p-6 sm:p-10  mx-auto "
    >
      <div className="w-full flex h-auto items-center justify-center flex-wrap">
        <div className="w-full sm:w-1/2  flex flex-col justify-center  p-10 ">
          <h1 className="text-3xl font-bold text-center text-amber-500 mb-6">
            Contact Us
          </h1>
          {/* Contact Section */}
          <div className="">
            <div className="">
              <a
                href="https://wa.me/919535665806"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span>+91 9535665806</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 6366115806</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>ronellexadvocates@gmail.com</span>
              </div>
            </div>
          </div>
          {/* Address Section */}
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-6 text-sm text-gray-800">
            <div className="border p-4 rounded-md shadow-sm">
              <h3 className="font-semibold text-lg mb-1">Mangaluru</h3>
              <p>
                #4-239, Pilikula,
                <br />
                Nisargadhama Nagara,
                <br />
                Moodushedde,
                <br />
                Vamanjoor Post,
                <br />
                Mangaluru - 575028
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-sm">
              <h3 className="font-semibold text-lg mb-1">Bengaluru</h3>
              <p>
                No. 12/69, Jetking Building, First Floor,
                <br />
                Opp. to MEI Polytechnic,
                <br />
                59<sup>th</sup> Cross, 4<sup>th</sup> Block,
                <br />
                Rajajinagar,
                <br />
                Bengaluru - 560 010
              </p>
            </div>
          </div>
        </div>
        {/* contact thing */}

        <div className="sm:w-[400px] w-[90%] p-6 border flex flex-col justify-center items-center rounded-2xl bg-white">
          <h1 className="text-3xl font-bold text-center text-amber-500 mb-6">
            Contact Details
          </h1>

          <table className="w-full table-auto">
            <tbody>
              <tr className="mb-4 align-top">
                <label htmlFor="name" className="w-24 text-right font-medium">
                  Name
                </label>
                <input
                  placeholder="Enter your name"
                  pattern="[0-9]{10}"
                  className="w-full border border-black rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  onChange={(e: any) => {
                    setname(e.target.value);
                  }}
                />
              </tr>
              <tr className="mb-4 align-top">
                <label htmlFor="name" className="w-24 text-right font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full border border-black rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  onChange={(e: any) => {
                    setphone(e.target.value);
                  }}
                />
              </tr>
              <tr className="mb-4 align-top">
                <label htmlFor="name" className="w-24 text-right font-medium">
                  Gmail
                </label>
                <input
                  id="phone"
                  type="email"
                  placeholder="Enter your gmail"
                  className="w-full border border-black rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  onChange={(e: any) => {
                    setgmail(e.target.value);
                  }}
                />
              </tr>
              <tr className="mb-4 align-top">
                <label htmlFor="name" className="w-24 text-right font-medium">
                  Message
                </label>
                <textarea
                  id="description"
                  placeholder="Enter your message"
                  className="w-full border border-black rounded-xl p-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                  onChange={(e: any) => {
                    setmessage(e.target.value);
                  }}
                />
              </tr>

              {/* Submit Button Row */}
              <tr>
                <td colSpan={2} className="pt-4 text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-xl bg-amber-400 text-white font-semibold hover:bg-amber-500 transition"
                    onClick={() => {
                      sendData();
                    }}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}
