import React from "react";
import { Aboutus } from "../../Mycomponents/Aboutus";
import History from "../../Mycomponents/History";

const page = () => {
  return (
    <>
      {" "}
      <Aboutus />
      <div className="w-full flex felx-col justify-center items-center">
        <History />
      </div>
    </>
  );
};

export default page;
