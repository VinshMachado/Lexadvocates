import React from "react";

const Maps = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center mt-24 mb-24 flex-col ">
        <h2 className="text-5xl font-semibold  text-gray-800 text-center ">
          {"Location's"}
        </h2>
        <div className="w-full h-auto  flex flex-wrap sm:flex-nowrap items-center justify-center bg-white    m-10">
          <div className="sm:w-1/2 w-full m-4 h-full bg-white flex flex-col justify-center items-center ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.9876724189717!2d77.5572811!3d12.9844639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3dabb069c21b%3A0xdb9f96da0a65ad92!2sJetking%20Bangalore%20Rajajinagar%20%7C%20Cloud%20Computing%20%7C%20Cyber%20Security%20%7C%20Cloud%20AI%20%7C%20BCA%20Degree%20%7C%20Institute!5e0!3m2!1sen!2sin!4v1748186447984!5m2!1sen!2sin"
              className="w-[97%] h-[80%] sm:h-[600px]  rounded-md "
              loading="lazy"
            ></iframe>
            <h2 className="text-3xl mt-4 font-semibold mb-6 text-gray-800 text-center ">
              Bengaluru
            </h2>
          </div>
          <div className="sm:w-1/2 w-full m-4 h-full bg-white flex flex-col justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1944.340882240649!2d74.89586418463257!3d12.92816368764755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba357646e89934d%3A0x88ac889de0417cb8!2sPilikula%20Nisargadhama!5e0!3m2!1sen!2sin!4v1748188452753!5m2!1sen!2sin"
              className="w-[97%] sm:h-[600px] m-4 rounded-md "
              loading="lazy"
            ></iframe>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center ">
              Mangaluru
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maps;
