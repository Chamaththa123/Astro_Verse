import React, { useState } from "react";
import { Dialog, Card } from "@material-tailwind/react";
import { CloseIcon } from "../../utils/icons";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import SignUp from "./SignUp";

export const UserLogin = ({ handleOpen, open }) => {
  const handleClose = () => {
    handleOpen();
  };

  const [activeTab, setActiveTab] = React.useState("signin");

  const data = [
    {
      label: "Sign In",
      value: "signin",
      desc: `Sign in to your account.`,
    },
    {
      label: "Sign Up",
      value: "signup",
      desc: `Create a new account.`,
    },
  ];

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        // handler={handleClose}
        className="bg-transparent shadow-none rounded-sm overflow-y-scroll scrollbar-y-style overflow-x-hidden font-inter"
      >
        <Card className="mx-auto w-full p-5 rounded-sm font-inter">
          <div className="flex justify-between align-center border-b-2">
            <div className="font-larsseit text-lg font-bold pb-5">
              New Dealer
            </div>
            <div
              className="font-bold text-[20px] cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </div>
          </div>

          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={activeTab === value ? "text-gray-900" : ""}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {value === "signin" ? (
                    <div>{desc}</div> // Here, you can render different components based on the tab value
                  ) : (
                    < SignUp/> // Render the signup form component here
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </Card>
      </Dialog>
    </>
  );
};
