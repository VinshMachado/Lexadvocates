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
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>{"Disclaimer & Confirmation"}</AlertDialogTitle>
            <AlertDialogDescription>
              <h3 className="mb-5">{`As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise. By clicking on the “I AGREE” button below, you acknowledge the following:`}</h3>
              <h3>{`there has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;`}</h3>
              <h3>{`you wish to gain more information about us for your own information and use;
the information about us is provided to you on your specific request and any information obtained or materials downloaded from this website is completely at your own volition and any transmission, receipt or use of this site does not create any lawyer-client relationship; and that`}</h3>
              <h3>{`we are not liable for any consequence of any action taken by you relying on the material / information provided on this website.`}</h3>
              <h3>{`If you have any legal issues, you, in all cases, must seek independent legal advice.
We use cookies to enhance your experience. By continuing to visit this website you agree to our use of cookies.`}</h3>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selection === true}
                onChange={() => setSelection(true)}
                className="form-checkbox text-blue-600 w-5 h-5"
              />
              <span>I Agree</span>
            </label>

            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selection === false}
                onChange={() => setSelection(false)}
                className="form-checkbox text-red-600 w-5 h-5"
              />
              <span>I Disagree</span>
            </label>
            <AlertDialogAction
              onClick={() => {
                if (selection) {
                  setopen(false);
                }
              }}
              className="bg-amber-400"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MainAlert;
