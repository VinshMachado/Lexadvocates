import React from "react";

const Maps = () => {
  return (
    <>
      <div className="w-full h-[600px] flex justify-center items-center mt-24 mb-24 flex-col ">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
          Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5617578748816!2d74.86389412488167!3d12.87155776706413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a2c2382953b%3A0x9ece208618ae60b0!2sNanthoor%2C%20Maroli%2C%20Mangaluru%2C%20Karnataka%20575007!5e0!3m2!1sen!2sin!4v1747674301365!5m2!1sen!2sin"
          className="w-[90%] h-full rounded-md "
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Maps;
