import { Mail, Phone } from "lucide-react";

export default function page() {
  return (
    <div className="p-6 sm:p-10 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center text-amber-400">
        Contact Us
      </h1>

      {/* Contact Section */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>+91 9535665806</span>
          </div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-800">
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
  );
}
