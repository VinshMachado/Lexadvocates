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
  return (
    <>
      <AlertDialog open={isopen}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              <h3 className="mb-5">{`Disclaimer

The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website (www.manuadvocates.com), you acknowledge and confirm that you are seeking information relating to Manu Advocates on your own accord and that there has been no form of solicitation, advertisement or inducement by Manu Advocates or its members.`}</h3>
              {`
The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Manu Advocates shall not be liable for consequences of any action taken by relying on the material/information provided on this website.

The contents of this website are the intellectual property of Manu Advocates.

Proceed to Website`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => {
                setopen(false);
              }}
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
