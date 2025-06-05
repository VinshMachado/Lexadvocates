import React from "react";
import { Aboutus } from "../../Mycomponents/Aboutus";
import History from "../../Mycomponents/History";

const page = () => {
  return (
    <div className="w-full h-auto">
      {" "}
      <Aboutus />
      <div className="w-full flex felx-col justify-center items-center">
        <History />
      </div>
    </div>
  );
};

export default page;
