"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const MainAlert = () => {
  const [isopen, setopen] = useState(true);
  const [selection, setSelection] = useState(false);
  return (
    <>
      <AlertDialog open={isopen}>
        <AlertDialogContent className="bg-white h-[70%] overflow-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>{"Disclaimer & Confirmation"}</AlertDialogTitle>
            <AlertDialogDescription className="text-sm sm:text-md">
              <h3 className="mb-5">{`As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By clicking on the “I AGREE” button below, you acknowledge the following:`}</h3>
              {`there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;`}
              {`you wish to gain more information about us for your own information and use;
the information about us is provided to you on your specific request and any information obtained or materials downloaded from this website is completely at your own volition and any transmission, receipt or use of this site does not create any lawyer-client relationship; and that`}
              {`we are not liable for any consequence of any action taken by you relying on the material / information provided on this website.`}
              {`If you have any legal issues, you, in all cases, must seek independent legal advice.
We use cookies to enhance your experience. By continuing to visit this website you agree to our use of cookies.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="items-center justify-center ">
            <AlertDialogAction
              onClick={() => {
                if (selection) {
                  setopen(false);
                }
              }}
              className="bg-amber-400 mt-3 w-full sm:w-auto"
            >
              Continue
            </AlertDialogAction>
            <div className="w-full flex justify-center items-center">
              <label className="flex items-center gap-2 ">
                <input
                  type="checkbox"
                  checked={selection === true}
                  onChange={() => setSelection(true)}
                  className="form-checkbox text-blue-600 w-5 h-5"
                />
                <span>I Agree</span>
              </label>

              <label className="inline-flex items-center gap-2 ml-5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selection === false}
                  onChange={() => setSelection(false)}
                  className="form-checkbox text-red-600 w-5 h-5"
                />

                <span>I Disagree</span>
              </label>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MainAlert;
